import express from "express"
import { signin } from "../controllers/signin.controller.js"

const signinroute = express.Router()

signinroute.get('/google',signin )

export default signinroute