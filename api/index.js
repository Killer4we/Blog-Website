import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect("mongodb+srv://abhinavajay20:TimVfaJbAbYtJKdU@cluster0.k65pq7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("MongoDb Connected");
}).catch(err=>{
    console.log("Error connecting MongoDb");
});


app.listen(300,()=>{
    console.log("Server is running on Port 3000");
});