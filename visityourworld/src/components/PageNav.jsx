import {NavLink } from "react-router-dom"
import styles from './PageNav.module.css';
import Logo from "./Logo";

const PageNav = () => {
  return (
    <div style={{backgroundColor: '#2B3138', padding:'15px'}}>
        <nav className={styles.nav}>
            <Logo></Logo>
            <ul>
                <li>
                    <NavLink to="/">HomePage</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default PageNav