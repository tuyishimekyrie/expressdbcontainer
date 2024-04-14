require('dotenv').config();
import express, { Request, Response } from "express"

const app = express();
const PORT = process.env.PORT

app.get("/", (req:Request,res:Response) => {
    res.send("Server Running....");
})

app.listen(PORT, () => {
    console.log(`App Running on ${PORT}...` )
})