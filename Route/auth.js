import express from "express";
import { register, logIn, logout } from "../Controller/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", logIn)
router.post("/logout", logout)

export default router