import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
const app = express();

app.use(express.json()); //This is done so that i can send json in api requests

mongoose.connect("mongodb+srv://abhinavajay20:TimVfaJbAbYtJKdU@cluster0.k65pq7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("MongoDb Connected");
}).catch(err=>{
    console.log("Error connecting MongoDb");
});


app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
});

app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);