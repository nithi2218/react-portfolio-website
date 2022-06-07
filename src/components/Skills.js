import React from 'react'

import HTML from '../assets/html5.png';
import CSS from '../assets/css3.png';
import GitHub from '../assets/github.png';
import JavaScript from '../assets/javascript.png';
import React1 from '../assets/react.png';


const Skills = () => {
  return (
    <div className='bg-[#0a192f] text-grey-300'>
      <div className='mx-auto p-4 flex felx-col justify-center w-full h-full'>
        <div>
        <p className='text-4xl text-gray-300'>Skills</p>
        </div>
      
      <div className='w-full grid grid-cols-2 text-center'> 
        <div>
        <img className='mx-auto' src={HTML} alt="HTML icon"></img>
        <p className='text-4xl text-gray-300'>HTML</p>
        </div>
        <div>
        <img className='mx-auto' src={CSS} alt="CSS icon"></img>
        <p className='text-4xl text-gray-300'>CSS</p>
        </div>
        <div>
        <img className='mx-auto' src={JavaScript} alt="JavaScript icon"></img>
        <p className='text-4xl text-gray-300'>JavaScript</p>
        </div>
        <div>
        <img className='mx-auto' src={GitHub} alt="GitHub icon"></img>
        <p className='text-4xl text-gray-300'>GitHub</p>
        </div>
        <div>
        <img className='mx-auto' src={React1} alt="React icon"></img>
        <p className='text-4xl text-gray-300'>React</p>
        </div>


        </div>        
      </div>
    </div>
  )
}

export default Skills