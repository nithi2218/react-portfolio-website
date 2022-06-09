import React from 'react';

import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';



const SocialFollow = () => {
  return (
    
    <div className='hidden lg:flex fixed flex-col right-0 top-[30%] '>
    <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-blue-600'>
        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/nithyadevi-sakthivel-2a9b82238/'><FaLinkedin size={30} />Linkedin</a>
      </li>

    <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#333333]'>
        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/nithi2218'><FaGithub size={30} />Github
        </a>
      </li>


      <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#a6a7a4]'>
        <a className='flex justify-between items-center w-full text-gray-300' href='mailto:nithi2218@gmail.com'><HiOutlineMail size={30} />Email
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#565f69]'>
        <a className='flex justify-between items-center w-full text-gray-300' href='/'><BsFillPersonLinesFill size={30} />Resume 
        </a>
      </li>
    </ul>
</div>
  )
}

export default SocialFollow