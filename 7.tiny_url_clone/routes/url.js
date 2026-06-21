import express from "express";
import { redirectUrl, SaveUrl } from "../controllers/urls.js";

const router = express.Router();

router.post("/save", SaveUrl);
router.get("/:shortId", redirectUrl);

export default router;
