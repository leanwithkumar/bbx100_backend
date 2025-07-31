import express from "express"
import { checkthis } from "../controllers/check.controller.js"

const check = express.Router()

check.get('/check', checkthis)

export default check