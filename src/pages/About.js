import React from 'react'
import Copyright from '../components/Copyright'
import Navbar from '../components/Navbar'
import SocialFollow from '../components/SocialFollow'


const About = () => {
    
  return (
    <div className='w-full h-screen  bg-[#0d323e]'>
      <Navbar />
    <SocialFollow />
        <div className='max-w-[1000px] mx-auto pt-10 flex flex-col justify-center h-full'>
    <p className='text-2xl sm:text-3xl font-bold text-blue-400'>Nithyadevi Sakthivel</p>
    <p className='text-xl text-[#ccd6f6] p-7'>I'm a graduate front-end web developer located in Sydney. I'm looking for a job opportunity as I have serious
passion for creative Web developing. Well-Organised person, problem solver with high attention to details.
Interested in the entire frontend spectrum and looking for ambitious project with positive people.</p>

<Copyright />
</div>

</div>

)
}

export default About