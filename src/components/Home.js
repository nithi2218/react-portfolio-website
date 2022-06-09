import React from 'react'
import SocialFollow from './SocialFollow'



const Home = () => {
  return (

    <div className='w-full h-screen  bg-[#0d323e]'>
      <SocialFollow />
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ccd6f6] text-xl'>Hi, My name is</p>
            
            <h1 className='text-3xl sm:text-6xl font-bold text-[#ccd6f6]'>Nithyadevi Sakthivel</h1>
            <h2 className='text-2xl sm:text-2xl font-bold text-[#ccd6f6] p-2'>I'm a Front End Web Developer</h2>
        </div>

    </div>

  )
}

export default Home