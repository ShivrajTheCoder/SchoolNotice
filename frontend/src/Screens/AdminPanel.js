import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';

export default function AdminPanel() {
    const [data,setfetchData]=useState([]);
    const [queries,setQueries]=useState([]);

    const fetchData=async()=>{
        await axios.get('/notices')
            .then(res=>
                setfetchData(res.data)
                // console.log(res.data)
            )
            .catch(err=>console.log(err));

            await axios.get('/queries')
              .then(res=>
                setQueries(res.data))
              .catch(err=>console.log(err));
        }
    
    useEffect(()=>{
        
        fetchData();
    },[data])

    const deleteNotice=async(id)=>{
        await axios.delete(`/notices/${id}`);
        fetchData();
        // console.log("hii");
    }
  return (
    <div className='flex flex-col'>
        <h1 className='font-extrabold '>Notices</h1>
        <Link to="/newnotice"><button className='mx-4 w-32 p-1 border-2 text-white bg-[#d62828] hover:border-inherit rounded-md'>New Notice</button></Link>
      {data.map(notice=>(
        <div className='flex m-3 p-2 border-b-2' key={notice._id}>
        <div className='font-bold mx-10'>{notice.title}</div>
        <div>{notice.description.substring(0,50)}</div>
        <button onClick={()=>{
            deleteNotice(notice._id);
            // console.log("hii")
        }} className='mx-4 p-1 border-2 text-white bg-[#d62828] hover:border-inherit rounded-md'>DELETE</button>
        <Link  to={`/updatenotice/${notice._id}`}> <button className='mx-4 p-1 border-2 text-white bg-[#d62828] hover:border-inherit rounded-md'>Update</button>
        </Link>
        </div>
      ))}

      <h1 className='font-extrabold '>Queries</h1>
        {queries.map(q=>(
          <div className='flex m-3 p-3 bg-[#dda7a7]'>
            <h1 className='text-blue font-extrabold mx-5' >{q.name}:</h1>
            <div>{q.query}</div>
          </div>
        ))}
    </div>
  )
}
