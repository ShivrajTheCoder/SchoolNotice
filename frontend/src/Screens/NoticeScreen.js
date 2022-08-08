import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function NoticeScreen() {
    const [data,setfetchData]=useState([]);
   
    useEffect(()=>{
        const fetchData=async()=>{
        await axios.get('/notices')
            .then(res=>
                setfetchData(res.data)
                // console.log(res.data)
            )
            .catch(err=>console.log(err));
        }
        fetchData();
    },[])
  return (
    <div className='flex flex-wrap m-3 p-3 justify-center items-center'>
      {data.map(notice=>(
        <div key={notice._id} className="m-3 p-3 h-58 w-60  bg-[#eff7f6]  drop-shadow-lg border-2 border-white rounded-lg ">
            
              <h1 className='text-lg font-bold'>{notice.title}</h1>
              <p>{notice.description}</p>
        </div>
      ))}
    </div>
  )
}
