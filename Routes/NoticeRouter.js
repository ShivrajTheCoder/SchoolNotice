import  express  from "express";
import Notice from "../models/Notice.js";
const noticeRouter=express.Router();

noticeRouter.get('/',async (req,res)=>{
 const notices=await Notice.find();
 res.send(notices);
})
noticeRouter.get('/:id',async (req,res)=>{
    const {id}=req.params;
 const notice=await Notice.findById(id);
 res.send(notice);
})

noticeRouter.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    const notice=await Notice.findOneAndDelete({_id:id})
    console.log(notice);
    res.status(200).send();
})

noticeRouter.put("/:id",async(req,res,next)=>{
    const {id}=req.params;
    // console.log(req.body);
    const notice=await Notice.findByIdAndUpdate(id,req.body);
    // next();
    res.send(notice);
})

noticeRouter.post("/new",async(req,res,next)=>{
    // console.log(req.body);
    const notice=await Notice.create(req.body);
    res.send(notice);
    // next();
})

export default noticeRouter;