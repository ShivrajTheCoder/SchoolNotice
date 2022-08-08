import express from 'express';
import  {admin}  from '../SampleData/admindata.js';
import Admin from "../models/Admin.js"
import { notices } from '../SampleData/data.js';
import Notice from '../models/Notice.js';
import { query } from '../SampleData/query.js';
import Query from '../models/Query.js';

const seedRouter=express.Router();
seedRouter.get('/adminSeed',async(req,res)=>{
    await Admin.deleteMany({});
    // console.log(admin);

    const createdAdmin=await Admin.create(admin);
    
    await Notice.deleteMany({});
    const createdNotes=await Notice.insertMany(notices);

    await Query.deleteMany({});
    const createdQuery=await Query.insertMany(query);

    res.send({createdAdmin,createdNotes, createdQuery});
    
})


export default seedRouter;