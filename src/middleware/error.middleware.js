
import dotenv from "dotenv"
import { response } from "express"


dotenv.config()

function handleError(err, req, res, next){
   res.status(500).json({
    message: err.message,
   
   })
if (process.env.NODE_ENVIRONMENT === "development")
   response.stack = err.stack

}

export default handleError