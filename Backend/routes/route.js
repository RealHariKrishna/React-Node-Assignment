import { getData } from "../controller/data-controller.js";
import express from "express";

const router = express.Router();

router.get("/", getData);

export default router;