import React, { useEffect, useRef, useState } from 'react'
import { useGeoLocation } from './useGeoLocation';

const GeoLocation = () => {
    const countClick = useRef(0);
    const [getLocation, setGetLocation] = useState({});
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const { lat, lng } = getLocation;

    const [location, setLocation] = useGeoLocation();

    const getPositon = (param) => {
        setGetLocation({
            lng: param?.coords?.longitude,
            lat: param?.coords?.latitude
        });
    }

    const geoLocationGet = () => {
            if (!navigator || !('geolocation' in navigator)) return setError('Geolocation is not supported by this browser');
            setLoader(true);
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((param) => {
                    console.log(param, 'param');
                    //getPositon(param);
                    setGetLocation({
                        lng: param?.coords?.longitude,
                        lat: param?.coords?.latitude
                    });
                    setLoader(false);  
                }, (error) => {
                    setError(error.message);
                    setLoader(false);
                });
            }
        countClick.current = countClick.current + 1;
    }

    //console.log(getLocation?.['lng']);

  return (
    <div>
        <button onClick={geoLocationGet} disabled={loader}>Get mY Position</button>
        { loader && <p>Loading....</p>}
        {error && <p>{error}</p>}
        {
            !loader && !error && lat && lng && (<p>Your GPS position: Latitude & longitude : <a target='_blank' href={`https://maps.google.com/?q=${lat},${lng}`} rel="noreferrer">{lng} {lat}</a></p>)
        }
        <p>You request postion {countClick.current} times</p>
    </div>
  )
}

export default GeoLocation