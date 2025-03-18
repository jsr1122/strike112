import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';

const MainModalhelper = ({ isOpen, onClose, children, isMobile }) => {
    if (!isOpen || !isMobile) return null; // Do not render the modal if it's closed
    // console.log(isMobile);
    return (
      <div className="fixed inset-0 sm:hidden bg-gray-400 bg-opacity-50 flex justify-center items-center z-50 px-2">
        <a href="https://wa.me/9060510840" target="_blank">
            <img src="hero.png" alt=""  className='object-cover'/>
        </a>
      </div>
    );
}

export default MainModalhelper
