import React from 'react'
import Copyright from '../components/Copyright'
import Navbar from '../components/Navbar'
import SocialFollow from '../components/SocialFollow'

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className='w-full h-screen bg-[#0d323e] flex justify-center items-center md:pt-0'>
      <SocialFollow />
      
        <form method='POST' action="https://getform.io/f/88cfb79e-2f52-4f61-809a-579ba759fca8" className='flex flex-col h-200 max-w-[600px] w-full'>
        <div className='pt-6'>
                <p className=' text-2xl font-bold pt-10  text-blue-400'>Contact</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
       <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
      <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-4 px-4 py-2 my-8 mx-auto flex items-center cursor-progress'>Send</button>
        </form>
          </div>
          
          <Copyright /></>
  )
}

export default Contact