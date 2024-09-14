import React, { useState } from 'react';
import RightNavBar from './RightNavBar';

const BurgerMenu = ({navItems}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full">
      <RightNavBar navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default BurgerMenu;