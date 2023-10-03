import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './Map.module.css';
import {
  MapContainer,
  TileLayer,
  useMap, Marker, Popup
} from 'react-leaflet'
import { useCities } from '../Context/CitiesContext';
const MapBox = () => {
  const navigate = useNavigate();
  const[searchParam, setSearchParam] = useSearchParams();
  const {cities} = useCities();
  
 /*  const lat = searchParam.get('lat');
  const lng = searchParam.get('lng'); */

  return (
    <div className={style.mapContainer} style={{height: 'calc(100vh - 4.8rem)'}} onClick={() => navigate('form')}>
     {/*  Map Hey there {lat} and {lng}
      <button onClick={() => setSearchParam({lat: 23.89, lng: 34.40})}>change position</button> */}
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className={style.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
             <span>{city.emoji}</span>
             <span>{city.cityName}</span>
             {city.notes}
            </Popup>
          </Marker>
        ))}
        
      </MapContainer>
    </div>
  )
}

export default MapBox