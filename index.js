import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
dotenv.config()
import mongodbconnection from "./models/mongodbconnection.js"
import signinroute from "./routes/signin.route.js"
import usercount from "./routes/userscount.route.js"



const app = express()
const port = process.env.PORT

app.use(cors({
  origin: ["http://localhost:5173", "https://billboardx100.vercel.app"],
  credentials: true
}));
app.use(express.json());


app.use('/auth', signinroute)
app.use('/users', usercount)




mongodbconnection()
.then(()=>{
    app.listen(port, ()=>console.log(`server is listening at port ${port}`))
})
.catch((error)=>{
    console.log("unble to connect the server", error)
})
