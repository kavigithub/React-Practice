import React, {useEffect, useState} from 'react';

const APIKEY = "16d609ca";

export const useMovies = (query) => {
    const [movies, setMovies] = useState([]);
    //const [watched, setWatched] = useState([]);
   // const [movieRating, setMovieRating] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");


    const callMovieData = async () => {
        const controller = new AbortController(); //AbortController : browser API
        try {
          setIsLoading(true);
          setErrorMsg(""); //always before we start for the fetching data reset the error
          const res = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${APIKEY}`, 
            {signal: controller.signal}
          );
    
          //A quick note: Network error is handled differently. In that case you won't get your own user defined error.
    
          if (!res || !res.ok)
            throw new Error("Something went wrong during fetching");
    
          const data = await res.json();
          
          if (data.Response === "False") throw new Error("Movie not found");
    
          setMovies(data.Search);
        } catch (error) {
          setErrorMsg(error.message);
        } finally {
          setIsLoading(false);
        }
    
        if (query.length < 3) {
          setMovies([]);
          setErrorMsg("");
          return;
        }
        //when serach another movie clear the moviedetails of previous movie
       //handleCLosedMovie();
    
        //Cleanup functions
        return function(){
          controller.abort();
        }
      };
    

      useEffect(() => {
        callMovieData();
      }, [query]);

      return {movies, isLoading, errorMsg}

}
