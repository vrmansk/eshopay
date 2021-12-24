import { Router } from "express";
import indexController from "../controllers/indexController";
import UploadDownloadHelper from "../middleware/UploadDownloadHelper";

const router = Router();

router.post("/", UploadDownloadHelper.uploadImages, indexController.productController.create, indexController.prodImageController.createFull);

export default router;
