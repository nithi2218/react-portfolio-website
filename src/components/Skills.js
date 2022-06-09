import React from 'react'

import HTML from '../assets/html5.png';
import CSS from '../assets/css3.png';
import GitHub from '../assets/github.png';
import JavaScript from '../assets/javascript.png';
import React1 from '../assets/react.png';


const Skills = () => {
  return (
    

    <div name='skills' className='w-full h-screen bg-[#0d323e] flex justify-center items-center p-4'>
      
      
      <div className='max-w-[1000px] mx-auto p-4 flex felx-col justify-center w-full top-20 '>
      
      
      
      <div className='w-full h-[400px] grid grid-cols-2 text-center'> 

        <div>
        <img className='w-20 mx-auto' src={HTML} alt="HTML icon"></img>
        <p className='my-4 text-gray-300'>HTML</p>
        </div>
        <div>
        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" ></img>
        <p className='my-4 text-gray-300'>CSS</p>
        </div>
        <div>
        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"></img>
        <p className='my-4 text-gray-300'>JavaScript</p>
        </div>
        <div>
        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon"></img>
        <p className='my-4 text-gray-300'>GitHub</p>
        </div>
        <div>
        <img className='w-20 mx-auto' src={React1} alt="React icon"></img>
        <p className='my-4 text-gray-300'>React</p>
        </div>


        </div>        
      </div>
    </div>
  )
}

export default Skills