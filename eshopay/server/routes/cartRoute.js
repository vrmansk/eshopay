import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.cartController.findAll);
router.get("/:id", indexController.cartController.findOne);
router.post("/", indexController.cartController.create);
router.put("/:id", indexController.cartController.update);
router.delete("/:id", indexController.cartController.deleteRow);

export default router;
