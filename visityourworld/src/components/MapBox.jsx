import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './Map.module.css';
const MapBox = () => {
  const navigate = useNavigate();
  const[searchParam, setSearchParam] = useSearchParams();
  
  const lat = searchParam.get('lat');
  const lng = searchParam.get('lng');

  return (
    <div className={style.mapContainer} style={{height: 'calc(100vh - 4.8rem)'}} onClick={() => navigate('form')}>
      Map Hey there {lat} and {lng}
      <button onClick={() => setSearchParam({lat: 23.89, lng: 34.40})}>change position</button>
    </div>
  )
}

export default MapBox