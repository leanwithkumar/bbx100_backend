import express from "express"
import { signin } from "../controllers/signin.controller.js"

const signinroute = express.Router()

// Change GET to POST
signinroute.post('/google', signin)

export default signinroute
