
import dotenv from "dotenv"


dotenv.config()

function handleError(err, req, res, next){
   res.status(500).json({
    message: err.message,
    stack:err.stack
   })
}

export default handleError