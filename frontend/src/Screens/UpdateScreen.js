import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function UpdateScreen() {
    const [data, setfetchData] = useState([]);
    const {id}=useParams();
    

    useEffect(() => {
        const fetchData = async () => {
           
            await axios.get(`/notices/${id}`)
                .then(res=>
                    setfetchData(res.data)
                )
                .catch(err=>console.log(err));
    
        }
        fetchData();
    },[id])
    const navigate = useNavigate();
    const [title,setTitle]=useState(data.title);
    const [description,setDesc]=useState(data.description);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
        await axios.put( `/notices/${id}`,{title,description});
        }catch(err){
            console.log(err);
        }
        
        navigate('/notification'|| '/')
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <input className='border-2 p-1 w-90 m-1 border-[#64748b]' type="text" name="title" required onChange={(e) => setTitle(e.target.value)} id="title" placeholder={data.title} />
                <textarea className='border-2 p-2 w-60 m-1 border-[#64748b]' name="description" id="description" cols="30" rows="10" placeholder={data.description} required onChange={(e) => setDesc(e.target.value)}></textarea>
                <button className='mx-4 p-1 border-2 text-white bg-[#d62828] hover:border-inherit rounded-md w-32'>Update</button>
            </form>
        </div>
    )
}
