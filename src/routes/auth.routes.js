import { Router } from "express"
import { registerUser }  from "../controllers/auth.controller.js"
import handleError from "../middleware/error.middleware.js"

const authRouter = Router()



authRouter.post("/register", registerUser)

export default authRouter