import express from "express";
import userRouter from "./Route/users.js"
import authRouter from "./Route/auth.js"
import libRouter from "./Route/lib.js"
import searchRouter from "./Route/search.js"
import cookieParser from "cookie-parser";
import axios from "axios";
// const express = require("express");
const app = express()
app.use(express.json())
//const axios = require('axios');
app.use(cookieParser())

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/library", libRouter)
app.use("/api/search", searchRouter)
//app.use("api/library", libraryRouter)

// app.get("/api/library/abc", (req, res) =>{
//     res.json("it works")
// })
app.listen(8800,()=>{
    console.log('connected112')
    console.log('hi')
})