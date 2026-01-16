import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userController from './controller/user.controller.js';
import authController from './controller/auth.controller.js'

dotenv.config();

mongoose.connect(
    process.env.MONGO_CONNECTION_STRING
)
    .then(() => {
        console.log("Mongodb is connected");
    }).catch(err => {
        console.log(err);
    })

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use('/api/user', userController)
app.use('/api/auth',authController )

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
