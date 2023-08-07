import express from "express";
import { searchContent } from "../Controller/search.js";
const router = express.Router();

router.get("/searchContent/:query", searchContent)

export default router