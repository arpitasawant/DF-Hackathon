import mongoose, { Document, Schema } from "mongoose";

export interface IRole extends Document {
  roleName: "admin" | "superadmin" | "caller" | "account"; // Restrict roleName to specific values
  status: "active" | "inactive";
}

const RoleSchema: Schema = new Schema({
  roleName: { 
    type: String, 
    enum: ["Admin", "Superadmin", "Caller", "Account"], // Enum for roleName
    required: true 
  },
  status: { 
    type: String, 
    enum: ["active", "inactive"], 
    required: true 
  },
});

const Role = mongoose.model<IRole>("Role", RoleSchema);

export default Role;
