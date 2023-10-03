import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { useCities } from '../Context/CitiesContext';

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const CityItem = (props) => {
  const {city} = props;
  const {currentCity} = useCities();
  const {cityName, emoji, date, id, position} =  city; 
  /* console.log(position, 'position'); */
  return (
    <li>
      <Link className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ''}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.cityName}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>  
    </li>
  )
}

export default CityItem