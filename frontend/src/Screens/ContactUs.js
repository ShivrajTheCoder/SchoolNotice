import React from 'react'

export default function ContactUs() {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center m-3 p-3'>
        <h1>Feel Free To Contact Us</h1>
      <form action="" className='flex flex-col m-2 p-2 w-90'>
        <input className='border-2 w-90 m-1 border-[#64748b]' type="text" name="name" id="name" placeholder='Enter your name' />
        <textarea className='border-2 w-60 m-1 border-[#64748b]' name="query" id="query" cols="30" rows="10" placeholder='Enter your query'></textarea>
      </form>
    </div>
  )
}
