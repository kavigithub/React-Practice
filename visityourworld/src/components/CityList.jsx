import styles from './CityList.module.css';
import CityItem from './CityItem';
import Spinner from './Spinner';
import Message from './Message';

const CityList = ({cities, isLoading}) => {
  if(isLoading) return <Spinner />
  if(!cities.length) return <Message message={'add your first city by clicking on the map'}></Message>

  return (
    <ul className={styles.cityList}>
      {cities.map((item) => <CityItem city={item} key={item.id}/>)}
    </ul>
  )
}

export default CityList