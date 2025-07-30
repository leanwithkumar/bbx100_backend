import { google } from "googleapis"
import dotenv from "dotenv";

dotenv.config(); 

const google_id = process.env.GOOGLE_CLIENT_ID
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET


const oauth2client = new google.auth.OAuth2(
    google_id,
    google_client_secret ,
    "postmessage"
)

console.log(google_id)
console.log(google_client_secret)
export default oauth2client