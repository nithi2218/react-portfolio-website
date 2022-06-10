import React from 'react'
import Copyright from '../components/Copyright'
import Navbar from '../components/Navbar'
import SocialFollow from '../components/SocialFollow'



const Home = () => {
  return (

    <div className='w-full h-screen  bg-[#0d323e]'>
      <Navbar />
      <SocialFollow />
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ccd6f6] text-xl'>Hi, My name is</p>
            
            <h1 className='text-3xl text-blue-400 sm:text-6xl font-bold '>Nithyadevi Sakthivel</h1>
            <h2 className='text-2xl sm:text-2xl font-bold text-[#ccd6f6] p-2'>I'm a Front End Web Developer</h2>
        </div>
<Copyright />
    </div>

  )
}

export default Home