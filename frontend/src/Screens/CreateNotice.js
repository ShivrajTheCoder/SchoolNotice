import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function CreateNotice() {
    const {id}=useParams();
    

   
    const navigate = useNavigate();
    const [title,setTitle]=useState('');
    const [description,setDesc]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios({
            method: 'post',
            url: `/notices/new`,
            data:{title,description},
        });
        navigate('/notification'|| '/')
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <input className='border-2 p-1 w-90 m-1 border-[#64748b]' type="text" name="title" required onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Title" />
                <textarea className='border-2 p-2 w-60 m-1 border-[#64748b]' name="description" id="description" cols="30" rows="10" placeholder="Description" required onChange={(e) => setDesc(e.target.value)}></textarea>
                <button className='mx-4 p-1 border-2 text-white bg-[#d62828] hover:border-inherit rounded-md w-32'>Add new</button>
            </form>
        </div>
    )
}
