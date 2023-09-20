import MapBox from '../components/MapBox';
import Sidebar from '../components/Sidebar';
import styles from '../components/Sidebar.module.css';
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar></Sidebar>
      <MapBox></MapBox>
    </div>
  )
}

export default AppLayout