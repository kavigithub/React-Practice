import MapBox from '../components/MapBox';
import Sidebar from '../components/Sidebar';
import styles from '../components/Sidebar.module.css';
const AppLayout = () => {
  return (
    <div className={styles.app} style={{display:'flex'}}>
      <Sidebar></Sidebar>
      <MapBox></MapBox>
    </div>
  )
}

export default AppLayout