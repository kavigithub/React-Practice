import styles from './CityList.module.css';
import CityItem from './CityItem';
import Spinner from './Spinner';
import Message from './Message';
import { useContext} from 'react';
import { CityContext, useCities} from '../Context/CitiesContext'

const CityList = () => {
  //const {cities} = useContext(CityContext);
  const {cities, isLoading} = useCities();
  if(isLoading) return <Spinner />
  if(!cities.length) return <Message message={'add your first city by clicking on the map'}></Message>

  return (
    <ul className={styles.cityList}>
      {cities.map((item) => <CityItem city={item} key={item.id}/>)}
    </ul>
  )
}

export default CityList