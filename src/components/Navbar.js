import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import SocialFollow from './SocialFollow';


const Navbar = () => {
const [tabs, setTabs] = useState(false)
const handleClick = () => setTabs(!tabs)

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#06242e] text-gray-300'>
      <div><p className='text-xl italic font-bold text-blue-400 text-decoration-line: underline'>NS</p>
        </div>  

    
        <ul className='hidden md:flex'>
        <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
            
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
        {!tabs ? <FaTimes /> : <FaBars />}
        </div>
  
        <ul className={!tabs? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0d323e] flex flex-col justify-center intems-center'}>
         <li>
          <p className='text-3xl'>Nithyadevi Sakthivel</p>
         </li>

         <li className="py-6 text-2xl hover:underline">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="py-6 text-2xl hover:underline">
            <Link onClick={handleClick} to="/about">
              About
            </Link>
          </li>
      
          <li className="py-6 text-2xl hover:underline">
            <Link onClick={handleClick} to="/skills">
              Skills
            </Link>
          </li>
          <li className="py-6 text-2xl hover:underline">
            <Link onClick={handleClick} to="/contact">
              Contact
            </Link>
          </li>

        </ul>
    <SocialFollow />
    </div>
    
    
)

}



export default Navbar