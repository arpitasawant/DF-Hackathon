import { Request, Response } from "express";
import createdUser from "../models/createdUsers";
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

// Get all users
export const getListUser = async (req: Request, res: Response) => {
  try {
    const users = await createdUser.find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Add a new user
export const addUser = async (req: Request, res: Response) => {
  const { name, mobile, email, role, image } = req.body;

  try {
    const newUser = new createdUser({ name, mobile, email, role, image, status: "active" });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error:any) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Update a user
export const editUser = async (req: Request, res: Response) => {
  const { name, mobile, email, role, image, status } = req.body;
  const { id } = req.params;

  try {
    const user = await createdUser.findByIdAndUpdate(id, { name, mobile, email, role, image, status }, { new: true });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await createdUser.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Exporting the controller functions along with the authenticateAdmin middleware
export { isAdmin};
