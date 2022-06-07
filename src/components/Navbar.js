import React, {useState} from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
const [menu, setMenu] = useState(false)
const handleClick = () => setMenu(!menu)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        </div>  

    
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
        {!menu ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!menu? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center intems-center'}>
            <li className='md:py-5 text-4xl'>Home</li>
            <li className='md:py-5 text-4xl'>About</li>
            <li className='md:py-5 text-4xl'>Skills</li>
            <li className='md:py-5 text-4xl'>Contact</li>

        </ul>
        <div className='hidden lg:flex fixed flex-col top-20 left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a6a7a4]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
    </div>
    
    </div>
    
    
)

}



export default Navbar
      