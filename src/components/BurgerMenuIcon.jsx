import React, { useState } from 'react';

const BurgerMenuIcon = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={`menu-btn ${showMenu ? 'close' : ''}`}
      onClick={toggleMenu}
      style={{
        position: 'absolute',
        zIndex: 3,
        right: '35px',
        top: '35px',
        cursor: 'pointer',
        transition: 'all 0.5s ease-out',
        transform: showMenu ? 'rotate(180deg)' : 'none',
      }}
    >
      <div
        className="btn-line"
        style={{
          width: '28px',
          height: '3px',
          margin: '0 0 5px 0',
          background: 'black',
          transition: 'all 0.5s ease-out',
          transform: showMenu
            ? 'rotate(45deg) translate(5px, 5px)'
            : 'none',
        }}
      ></div>
      <div
        className="btn-line"
        style={{
          width: '28px',
          height: '3px',
          margin: '0 0 5px 0',
          background: 'black',
          transition: 'all 0.5s ease-out',
          opacity: showMenu ? 0 : 1,
        }}
      ></div>
      <div
        className="btn-line"
        style={{
          width: '28px',
          height: '3px',
          margin: '0 0 5px 0',
          background: 'black',
          transition: 'all 0.5s ease-out',
          transform: showMenu
            ? 'rotate(-45deg) translate(7px, -6px)'
            : 'none',
        }}
      ></div>
    </div>
  );
};

export default BurgerMenuIcon;