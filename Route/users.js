import express from "express";
import { checkUser } from "../Controller/users.js";

const router = express.Router();

router.get("/test1", checkUser)


export default router 