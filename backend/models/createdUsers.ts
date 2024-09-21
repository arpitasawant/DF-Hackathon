import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  mobile: string;
  email: string;
  role: "Admin" | "Superadmin" | "Caller" | "Account"; // Role can be flexible
  status: "active" | "inactive"; // Status
  image?: string; // Image URL or path
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["Admin", "Superadmin", "Caller", "Account"], required: true },
  status: { type: String, enum: ["active", "inactive"], required: true },
  image: { type: String, required: false }, // Optional image field
});

// Specify the collection name here
const createdUser = mongoose.model<IUser>("CreatedUsers", userSchema);

export default createdUser;
