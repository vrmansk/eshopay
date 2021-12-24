import { Router } from "express";
import authJWT from "../middleware/authJWT";
import indexController from "../controllers/indexController";

const router = Router();

router.post("/signin", authJWT.authenticate, authJWT.login);

router.post("/signup", indexController.userController.signup);

export default router;
