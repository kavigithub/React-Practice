import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './Map.module.css';
import {
  MapContainer,
  TileLayer,
  useMap, Marker, Popup, useMapEvents
} from 'react-leaflet';
import { useCities } from '../Context/CitiesContext';
import { useEffect, useState } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import Button from './Button';
const MapBox = () => {
/*   const navigate = useNavigate(); */
  const[searchParam] = useSearchParams();
  const {cities} = useCities();
  const {position: geoLocationPosition, isLoading: isLoadingPosition, getPostion} = useGeolocation();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  
 const mapLat = searchParam.get('lat');
  const mapLng = searchParam.get('lng');

  useEffect(() => {
    if(mapLat && mapLng) setMapPosition([mapLat, mapLng])
  }, [mapLat, mapLng]);

  useEffect(() => {
    if(geoLocationPosition){
      setMapPosition([geoLocationPosition?.lat , geoLocationPosition?.lng])
    }
  })

  return (
    <div className={style.mapContainer} style={{height: 'calc(100vh - 4.8rem)'}}>
     {!geoLocationPosition &&  <Button type="position" onClick={getPostion}>
        {isLoadingPosition? "Loading...": "use your position"}
      </Button>}
     {/*  Map Hey there {lat} and {lng}
      <button onClick={() => setSearchParam({lat: 23.89, lng: 34.40})}>change position</button> */}
      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={style.map}>
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
        <ChangeCenter position={mapPosition} />
        <DeteckClick></DeteckClick>
      </MapContainer>
    </div>
  )
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.closePopup();  // new code
  map.setView(position);
} 

function DeteckClick(){
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng${e.latlng.lng}`) 
  })
}

export default MapBox