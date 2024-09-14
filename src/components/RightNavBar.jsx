import React, { useState } from 'react';
import BurgerMenuButton from './BurgerMenuButton';

const RightNavBar = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
        onClick={toggleOpen} 
        className="md:hidden fixed top-4 right-4 z-20"
        aria-label="Toggle navigation menu"
      >
        <BurgerMenuButton color="white" />
      </button>
      <nav className={`
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        md:translate-x-0
        fixed md:relative top-0 right-0 h-screen md:h-auto w-64 md:w-auto
        bg-gray-800 md:bg-transparent
        transition-transform duration-300 ease-in-out
        md:transition-none
        z-10 md:z-auto
      `}>
        <ul className="
          flex flex-col md:flex-row
          items-center justify-center md:justify-end
          h-full md:h-auto
          pt-16 md:pt-0
        ">
          {navItems.map((item, index) => (
            <li key={index} className="
              py-4 md:py-0 px-6 md:px-4
              text-white md:text-gray-700
              hover:bg-gray-700 md:hover:bg-transparent
              hover:text-white md:hover:text-gray-900
              transition-colors duration-200
            ">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default RightNavBar;