import express from "express";
import { notices } from "./data.js";
// import Query from "../models/Query.js"
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./Routes/SeedRoutes.js";
import noticeRouter from "./Routes/NoticeRouter.js";
import Quer from "./models/Query.js";
const app=express();

const PORT=process.env.PORT || 5000;

dotenv.config();
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("connection succesful!");
}).catch(err => {
    console.log(err.message);
})



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/seed",seedRouter);
app.use("/notices",noticeRouter);


app.get('/queries',async(req,res)=>{
  const queries=await Quer.find({});
//   console.log(queries);
res.send(queries);
})
app.get('/notices',(req,res)=>{
    res.send(notices);
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/build"));
    const path=requie("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
    })
}

app.listen(PORT,()=>{
    console.log("listening!");
})