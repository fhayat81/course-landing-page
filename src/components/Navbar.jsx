import React from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import Logo from '../assets/Logo.png';
const Navbar = ({setPopUp, setPopUpLog}) => {
  return (
    <div className='bg-primary py-3 text-white shadow-custom-dark'>
      <div className='container flex items-center'>
        <div className='flex items-center'>
            <img className="h-10" src={Logo} alt="Logo"/>
            <h1 className='text-2xl font-bold'>Learning Hub</h1>
        </div>
        <div className='hidden md:block absolute right-8'>
          <div className='flex gap-5 items-center'>
            <div data-aos="fade-down">
            <button 
            onClick={() => setPopUp(true)}
            className='bg-secondary py-2 px-4 rounded-full flex items-center gap-2 hover:scale-110 duration-300'
            > Sign Up <FaArrowCircleUp className='text-2xl'/></button>
            </div>
            <div data-aos="fade-down" data-aos-delay="200">
            <button 
            onClick={() => setPopUpLog(true)}
            className='bg-secondary py-2 px-4 rounded-full flex items-center gap-2 hover:scale-110 duration-300'
            >Log In <MdLogin className='text-2xl'/></button>
            </div>
          </div>
        </div>
        <div className='md:hidden absolute right-8'>
          <div className='group relative cursor-pointer'>
            <div data-aos="fade-left">
            <div className='group-hover:-rotate-180 duration-300 '>
              <button><IoMenu className='text-5xl'/></button>
            </div>
            </div>
            <div 
            className='opacity-0 group-hover:opacity-100 absolute duration-300 right-0 z-20 shadow-custom-light bg-white text-black w-[115px] flex-col rounded-md items-center justify-center transform -translate-x-full group-hover:translate-x-0 transition-all ease-out'>
                <div>
                <button 
                onClick={() => setPopUp(true)}
                className='flex items-center gap-2 py-1 px-2 m-1 rounded-sm hover:bg-primary/20 w-[107px]'>Sign Up <FaArrowCircleUp className='text-2xl'/></button>
                <button 
                onClick={() => setPopUpLog(true)}
                className='flex items-center gap-2 py-1 px-2 m-1 rounded-sm hover:bg-primary/20 w-[107px]'>Log In <MdLogin className='text-2xl ml-2'/></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
