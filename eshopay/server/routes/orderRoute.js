import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.orderController.findAll);
router.get("/:name", indexController.orderController.findOne);
router.post("/", indexController.orderController.create);
router.put("/:name", indexController.orderController.update);
router.delete("/:name", indexController.orderController.deleteRow);

export default router;
