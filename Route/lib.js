import express from "express";
import {displayLib, deleteLib} from "../Controller/lib.js"
const router = express.Router();

router.get("/getLib", displayLib)

// router.post("/postLib", addLib)

router.delete("/deleteLib", deleteLib)

export default router