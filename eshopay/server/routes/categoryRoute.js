import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.categoryController.findAll);
router.get("/:id", indexController.categoryController.findOne);
router.post("/", indexController.categoryController.create);
router.put("/:id", indexController.categoryController.update);
router.delete("/:id", indexController.categoryController.deleteRow);

export default router;
