import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <div className='flex h-12 p-1 bg-[#d62828] text-white text-md'>
                <Link to='/'><button className='p-1  mx-2 border-2 border-[#d62828] hover:border-inherit rounded-md'>Home</button></Link>
                <Link to='/notification' className='p-1 mx-2 border-2 border-[#d62828] hover:border-inherit rounded-md'>Notification</Link>
                <Link to='/contactus' className='p-1 mx-2 border-2 border-[#d62828] hover:border-inherit rounded-md'>Contact Us</Link>
                <Link to='/admin' className='p-1 mx-2 border-2 border-[#d62828] hover:border-inherit rounded-md'>Admin</Link>
            </div>
        </header>
    )
}
