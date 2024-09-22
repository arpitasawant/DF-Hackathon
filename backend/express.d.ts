// express.d.ts
import { Request } from "express";

declare module "express" {
  export interface Request {
    user?: string ;
    
  }
}

// express.d.ts
// import { Request } from "express";
// import { Types } from "mongoose";

// declare module "express" {
//   export interface Request {
//     user?: {
//       _id: Types.ObjectId; // Use Types.ObjectId for MongoDB ID
//       email: string; // Add any other properties you expect on the user
//       role: "Admin"; // Adjust based on your user model
//     };
//   }
// }
