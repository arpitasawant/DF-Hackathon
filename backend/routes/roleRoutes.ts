import express from "express";
import { getRoles, addRole, editRole, deleteRole, isAdmin } from "../controllers/roleController";

const router = express.Router();

router.get("/get-list", isAdmin, getRoles);
router.post("/add-role", isAdmin, addRole);
router.patch("/edit-role/:id", isAdmin, editRole);
router.delete("/delete-role/:id", isAdmin, deleteRole);

export default router;
