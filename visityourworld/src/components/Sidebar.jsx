import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import AppNav from './AppNav';
import styles from './Sidebar.module.css';


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <AppNav />
            <Outlet></Outlet>
        <Footer />
    </div>
  )
}

export default Sidebar