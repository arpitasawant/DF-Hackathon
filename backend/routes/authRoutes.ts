import express from "express";
import { register, login,forgotPassword ,logout} from "../controllers/authController";

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword); // New route for forgot password
// router.post("/reset-password", resetPassword);
router.post("/logout", logout);
export default router;
