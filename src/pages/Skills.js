import React from 'react'

import HTML from '../assets/html5.png';
import CSS from '../assets/css3.png';
import GitHub from '../assets/github.png';
import JavaScript from '../assets/javascript.png';
import React1 from '../assets/react.png';
import Tailwind from '../assets/tailwind.PNG';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';
import SocialFollow from '../components/SocialFollow';


const Skills = () => {
  return (
    <>
<Navbar />



    <div name='skills' className='w-full h-screen bg-[#0d323e] flex justify-center items-center'>
      
      <div className='max-w-[1000px] mx-auto flex felx-col justify-center w-full top-20 '>
    
      <div className='w-full grid grid-cols-2 text-center'> 

      <div className=''>
      <p className='text-blue-400 my-6 text-xl'>Skills I have learned ...</p>
      </div>  

<div></div>
        <div>
        <img className='w-10 mx-auto' src={HTML} alt="HTML icon"></img>
        <p className='my-4 text-gray-300'>HTML</p>
        </div>
        <div>
        <img className='w-10 mx-auto' src={CSS} alt="CSS icon" ></img>
        <p className='my-4 text-gray-300'>CSS</p>
        </div>
        <div>
        <img className='w-10 mx-auto' src={JavaScript} alt="JavaScript icon"></img>
        <p className='my-4 text-gray-300'>JavaScript</p>
        </div>
        <div>
        <img className='w-10 mx-auto' src={GitHub} alt="GitHub icon"></img>
        <p className='my-4 text-gray-300'>GitHub</p>
        </div>
        <div>
        <img className='w-10 mx-auto' src={React1} alt="React icon"></img>
        <p className='my-4 text-gray-300'>React</p>
        </div>
        <div>
        <img className='w-10 mx-auto' src={Tailwind} alt="Tailwind icon"></img>
        <p className='my-4 text-gray-300'>Tailwind CSS</p>
        </div>


        </div>    
        <SocialFollow />
        <Copyright />
      </div>
       
    </div>
    </>
  )
}

export default Skills