import express from "express";
import { EventController } from "../controllers/eventController.js";

const router = express.Router();

router.get("/", EventController.list);
router.get("/:id", EventController.getEvent);
router.post("/", EventController.create);
router.put("/:id", EventController.update);
export default router;
