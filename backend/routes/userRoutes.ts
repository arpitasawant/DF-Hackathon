import { Router } from "express";
import { 
  getListUser, 
  addUser, 
  editUser, 
  deleteUser, 
  isAdmin 
} from "../controllers/userController";
import multer from "multer";

// Setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder to save uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } }); // Max size 10 MB

const router = Router();

// Admin routes for user management
router.get("/get-list-user", isAdmin, getListUser);
router.post("/add-user", isAdmin, upload.single("image"), addUser);
router.patch("/edit-user/:id", isAdmin, upload.single("image"), editUser);
router.delete("/delete-user/:id", isAdmin, deleteUser);

export default router;
