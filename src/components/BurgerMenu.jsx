import React, { useState } from 'react';
import RightNavBar from './RightNavBar';

const BurgerMenu = ({navItems}) => {
  const [isOpen] = useState(false);

  return (
    <div className="relative">
      <RightNavBar navItems={navItems}/>
    </div>
  );
};

export default BurgerMenu;