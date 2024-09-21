import { Request, Response } from "express";
import Role from "../models/role";
import jwt from "jsonwebtoken";
import User from "../models/user";

const jwtSecret = process.env.JWT_SECRET || "secret";

// Middleware to check if user is admin
const isAdmin = async (req: Request, res: Response, next: Function) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  
  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as { userId: string };
    const user = await User.findById(decoded.userId);
    
    if (!user || user.role !== "Admin") {
      return res.status(403).json({ msg: "Access denied. Admins only." });
    }

    next(); // User is admin, proceed to the next middleware
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// Get all roles
export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Add a new role
export const addRole = async (req: Request, res: Response) => {
  const { roleName } = req.body;
  const status: "active" = "active"; // Default status

  try {
    const newRole = new Role({ roleName, status });
    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Update a role
export const editRole = async (req: Request, res: Response) => {
  const { roleName, status } = req.body;
  const { id } = req.params;

  try {
    const role = await Role.findByIdAndUpdate(id, { roleName, status }, { new: true });
    if (!role) {
      return res.status(404).json({ msg: "Role not found" });
    }
    const { _id, ...updatedRole } = role; // Exclude _id
    res.json(updatedRole);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Delete a role
export const deleteRole = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      return res.status(404).json({ msg: "Role not found" });
    }
    res.json({ msg: "Role deleted successfully" });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Exporting the controller functions along with the isAdmin middleware
export { isAdmin };
