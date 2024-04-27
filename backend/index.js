import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './router/bookRouter.js'
import cors from 'cors'
import userRoute from './router/userRouter.js'

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI 

// connect to mongo db
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected to mongoDb");
} catch (error) {
    console.log("Error:", error);
}

// defining routes
app.use("/book",bookRoute)
app.use('/user',userRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})