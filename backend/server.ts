import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import roleRoutes from "./routes/roleRoutes"; 
import userRoutes from "./routes/userRoutes";
import cors from "cors";
dotenv.config();

const app: Application = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());


app.use(express.json());

// Routes
app.use("/api/", authRoutes);
app.use("/api/roles/", roleRoutes);
app.use("/api/user", userRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
