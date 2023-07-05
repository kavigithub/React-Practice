import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Title = () => (
    <a href="/">
      <img
        className="logo d-flex align-items-center mb-3 mb-md-0 me-md-auto"
        width={100}
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
    );

const Header = () => {
  const[changeStatus, setChangeStatus] = useState('Login');

  const chnageLoginStatus = (param: string) => {
    setChangeStatus(param === 'Login' ? 'Logout' : 'Login')
  }

  return (
    <div className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
  <Title />
  <div>
    <ul className="nav nav-pills">
      <li className='nav-item p-1'>
        <Link to={'/'}>Home</Link>
      </li>
      <li className='nav-item p-1'>
        <Link to={'/about'}> About</Link> 
      </li>
      <li className='nav-item p-1'>
        <Link to={'/contact'}>Contact</Link>  
      </li>
      <li className='nav-item p-1'>
        <Link to={'/smallApp'}>Test</Link>  
      </li>
      <li className='nav-item p-1'>Cart</li>
      <button className='btn btn-primary mx-2' onClick={() => chnageLoginStatus(changeStatus)}>{changeStatus}</button>
    </ul>
  </div>
</div>
  )
}

export default Header