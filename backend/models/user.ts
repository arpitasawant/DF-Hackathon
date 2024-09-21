// import mongoose, { Document, Schema } from "mongoose";

// export interface IUser extends Document {
//   email: string;
//   password: string;

// }

// const userSchema = new Schema<IUser>({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model<IUser>("User", userSchema);
// export default User;

import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  role: "Admin"; // Only allowing "admin" for now
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "Admin" },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
