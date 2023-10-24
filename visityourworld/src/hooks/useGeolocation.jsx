import { useState } from "react";
import { useCities } from "../Context/CitiesContext"

export const useGeolocation = (defaultPosition = null) => {
  const {isLoading, setIsLoading} = useCities();  
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState({});

   function getPostion(){
    if(!navigator.geolocation){
        setError({message: 'Browser does not support geolocation'});
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) =>{
       console.log('latitude', position.coords.latitude,'longitude:', position.coords.longitude );
       setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude
       })
       setIsLoading(false);
    }, (error) => {
        setError(error.message);
        setIsLoading(false);
    })
   } 

  return {isLoading, position, error, getPostion}
}
