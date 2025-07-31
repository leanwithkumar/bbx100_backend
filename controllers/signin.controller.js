import Users from "../models/users.model.js"
import oauth2client from "../utils/googleConfig.js"
import axios from "axios"
import jwt from "jsonwebtoken"


export const signin = async(req, res)=>{
    console.log("Received Google Auth request");
    console.log("Query or Body:", req.query, req.body);
    try{
        const {code} = req.query
        const googleRes = await oauth2client.getToken(code)
        oauth2client.setCredentials(googleRes.tokens)
         console.log("Google token response:", googleRes);
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)

        const {email, name, picture} = userRes.data
        let user = await Users.findOne({email})
        if(!user){
            user = await Users.create({
                email : email,
                name : name,
                image : picture
            })
        }

        const { _id} = user
        const token = jwt.sign(
            {_id, email},
            process.env.JWT_SECRET,
            {expiresIn : '24h'}
        )
        return res.status(200).json({
            message : "users sucessfully logged in",
            token,
            user
        })

    }catch(error){
        console.log(error)
        res.status(400).json({
            message : "unable to sign in",
            error : error
        })
    }
}