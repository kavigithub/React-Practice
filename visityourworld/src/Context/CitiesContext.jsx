import React, { createContext, useState, useEffect, useContext } from 'react'

export let CityContext = createContext();

const baseURL = 'http://localhost:9000';

const CitiesProvider = ({children}) => {

    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});
  
    useEffect(() => {
      async function fetchCitiesData(){
        try {
          setIsLoading(true);
          const resp = await fetch(`${baseURL}/cities`);
          const data = await resp.json();
          setCities(data);
        } catch (error) {
          console.log(error, 'error');
        } finally {
          setIsLoading(false);
        }
      }
      fetchCitiesData();
    }, []);

    async function getCity(id){
      try {
        setIsLoading(true);
        const resp = await fetch(`${baseURL}/cities/${id}`);
        const data = await resp.json();
        console.log(data);
        setCurrentCity(data);
      } catch (error) {
        console.log(error);
      } finally{
        setIsLoading(false);
      }
    }

    console.log(cities, 'cities');

  return (
    <CityContext.Provider value={{
        cities,
        isLoading,
        currentCity,
        getCity
    }}>
        {children}
    </CityContext.Provider>
  )
}

const useCities = () => {
    const context = useContext(CityContext);
    if(context === undefined) {
        throw new Error('useCityContext must be used within a CitiesProvider')
    }
    return context;
}

export {CitiesProvider, useCities}