import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || "secret";

export const register = async (req: Request, res: Response) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, jwtSecret, {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, jwtSecret, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "User does not exist" });
      }
  
      // Create a reset token (for simplicity, using user ID here; ideally, use JWT or similar)
      const resetToken = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: "1h", // Token valid for 1 hour
      });
  
      // Create a reset link
      const resetLink = `http://localhost:5000/api/reset-password/${resetToken}`;
  
      // Setup Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "Gmail", // You can use other email services
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset Request",
        html: `<p>To reset your password, click the link below:</p>
               <a href="${resetLink}">Reset Password</a>`,
      });
  
      res.json({ msg: "Reset link sent to your email" });
    } catch (error) {
      res.status(500).send("Server error");
    }
  };
  
  // Function to reset password
  export const resetPassword = async (req: Request, res: Response) => {
    const { token } = req.params;
    const { newPassword, confirmPassword } = req.body;
  
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }
  
    try {
      const decoded = jwt.verify(token, jwtSecret) as { userId: string };
  
      // Find the user by ID
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(400).json({ msg: "User does not exist" });
      }
  
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
  
      // Update user's password
      user.password = hashedPassword;
      await user.save();
  
      res.json({ msg: "Password reset successful" });
    } catch (error) {
      res.status(500).send("Server error");
    }
  };

  export const logout = async (req: Request, res: Response) => {
    try {
    
  
      res.json({ msg: "Logout successful" });
    } catch (error) {
     
      res.status(500).json({ msg: "Server error during logout" });
    }
  };
  