import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.lineItemController.findAll);
router.get("/:id", indexController.lineItemController.findOne);
router.post("/", indexController.lineItemController.create);
router.put("/:id", indexController.lineItemController.update);
router.delete("/:id", indexController.lineItemController.deleteRow);

export default router;
