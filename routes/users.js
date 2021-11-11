import express from "express";

import { signin } from "../controllers/user.js";
import { signup } from "../controllers/user.js";

const router = express.Router();

router.post("/", signin);
router.post("/", signup);

export default router;
