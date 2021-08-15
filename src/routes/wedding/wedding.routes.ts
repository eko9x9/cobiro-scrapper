import { Router } from "express";
import controllers from "../../controllers/index";

export const router = Router();

router.get("/", controllers.weddingController.GetScarppedFile);