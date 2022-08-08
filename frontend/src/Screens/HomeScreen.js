import React from 'react'
import SideBar from './SideBar'
import {Link} from "react-router-dom"
export default function HomeScreen() {
  return (
    <div className='h-full bg-gradient-to-r from-[#edf6f9] to-[#ffddd2]'>
      <div className='p-4 flex flex-col justify-center align-center'>
        <img className=' w-auto h-80' src="./images/school.jpg" alt="" />
        <Link to="/notification"><button className='p-2 m-3 text-white bg-[#d62828] rounded-md border-2 border-white'>NOTICES</button></Link>
      </div>
    </div>
  )
}
