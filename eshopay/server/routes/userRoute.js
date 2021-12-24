import { Router } from "express";
import IndexCtrl from "../controllers/indexController";

const router = Router();

// method post
router.get("/:id", IndexCtrl.userController.findOne);
router.post("/login", IndexCtrl.userController.signin);

export default router;
