// express.d.ts
import { Request } from "express";

declare module "express" {
  export interface Request {
    user?: string;  // This adds 'user' as an optional property
  }
}
