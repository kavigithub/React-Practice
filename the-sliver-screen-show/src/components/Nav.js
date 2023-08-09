import React, {useState} from 'react'
import Logo from '../utils/Logo';

const Nav = ({children}) => {

  return (
    <div>
      <nav className="nav-bar">
        <Logo></Logo>
        {children}
      </nav>
    </div>
  )
}

export default Nav