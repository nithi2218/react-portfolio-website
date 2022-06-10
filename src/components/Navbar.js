import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
const [tabs, setTabs] = useState(false)
const handleClick = () => setTabs(!tabs)

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#06242e] text-gray-300'>
      <div><p className='text-xl italic font-bold text-blue-400 text-decoration-line: underline'>NS</p>
        </div>  

    
        <ul className='hidden md:flex'>
            <li>
              <a className='hover:underline' href='/'>Home</a>
              </li>
              <li>
            <a className='hover:underline' href='/about'>About</a>
            </li>
            <li>
            <a className='hover:underline' href='/skills'>Skills</a>
            </li>
            <li>
            <a className='hover:underline' href='/contact'>Contact</a>
            </li>
            
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
        {!tabs ? <FaTimes /> : <FaBars />}
        </div>
  
        <ul className={!tabs? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0d323e] flex flex-col justify-center intems-center'}>
         <li>
          <p className='text-3xl'>Nithyadevi Sakthivel</p>
         </li>

            <li className='py-5 text-2xl'>
              <a className='hover:underline' href='/'>Home</a>
            </li>
      
            <li className='py-5 text-2xl'>
            <a className='hover:underline' href='/about'>About</a>
            </li>
      
      
            <li className='py-5 text-2xl'>
            <a className='hover:underline' href='/skills'>Skills</a>
            </li>
            
            <li className='py-5 text-2xl'>
            <a className='hover:underline' href='/contact'>Contact</a>
            </li>

        </ul>
    
    </div>
    
    
)

}



export default Navbar
      