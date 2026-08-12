import express from "express"
import authRouter from "./routes/auth.routes.js"
import handleError from "./middleware/error.middleware.js"


const app  = express()
app.use(express.json())

app.use("/auth/api", authRouter)

app.use(handleError)
export default app