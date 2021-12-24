import { Router } from "express";
import indexController from "../controllers/indexController";
//import UploadDownloadHelper from "../middleware/UploadDownloadHelper";

const router = Router();

router.get("/", indexController.prodImageController.findAll);
router.get("/:id", indexController.prodImageController.findOne);
//router.post("/", indexController.prodImageController.create);
//router.post("/uploadfile", UploadDownloadHelper.uploadImages, indexController.prodImageController.create1);

export default router;
