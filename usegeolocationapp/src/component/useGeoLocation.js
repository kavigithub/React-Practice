import React, {useState} from 'react'

export const useGeoLocation = () => {

    const [getLocation, setGetLocation] = useState({});
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const { lat, lng } = getLocation;

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
    }


    return {loader, error, lat, lng, geoLocationGet}
}

