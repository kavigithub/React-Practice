import React, { useEffect, useRef, useState } from 'react'
import { useGeoLocation } from './useGeoLocation';

const GeoLocation = () => {
    const [countClick, setCountClick] = useState(0);
    const {loader, error, lat, lng, geoLocationGet} = useGeoLocation();
    //console.log(getLocation?.['lng']);

    const handleClickAndgeoLocationGet = () => {
        geoLocationGet();
        setCountClick((count) => count + 1);
    }

  return (
    <div>
        <button onClick={handleClickAndgeoLocationGet} disabled={loader}>Get mY Position</button>
        { loader && <p>Loading....</p>}
        {error && <p>{error}</p>}
        {
            !loader && !error && lat && lng && (<p>Your GPS position: Latitude & longitude : <a target='_blank' href={`https://maps.google.com/?q=${lat},${lng}`} rel="noreferrer">{lng} {lat}</a></p>)
        }
        <p>You request postion {countClick} times</p>
    </div>
  )
}

export default GeoLocation