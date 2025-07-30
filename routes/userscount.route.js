import express from "express"
import { countuser } from "../controllers/countuser.controller.js"

const usercount = express.Router()

usercount.get('/count', countuser)

export default usercount 
