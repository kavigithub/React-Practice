import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Box from "./components/Box";
import WatchedBox from "./components/WatchedBox";
import Search from "./utils/Search";
import NumResult from "./components/NumResult";
import { tempMovieData } from "./utils/MovieData";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import { tempWatchedData } from "./utils/MovieData";
import StarRating from "./components/StarRating";
import Loader from "./utils/Loader";
import Error from "./utils/Error";

const APIKEY = "16d609ca";
/* const movieName = "Good Will Hunting"; */
const tempQuery = "interstellar";

export default function App() {
  const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState(tempMovieData);
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [movieRating, setMovieRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const callMovieData = async () => {
    try {
      setIsLoading(true);
      setErrorMsg(''); //always before we start for the fetching data reset the error
      const res = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${APIKEY}`
      );

      //A quick note: Network error is handled differently. In that case you won't get your own user defined error.

      if (!res || !res.ok)
        throw new Error("Something went wrong during fetching");

      const data = await res.json();
      //console.log(data);
      if (data.Response === "False") throw new Error("Movie not found");

      setMovies(data.Search);
      /* if(!res.ok) throw new Error("Something is not going on right with movie api") */
    } catch (error) {
      //console.log(error.message);
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }

    if(!query.length){
        setMovies([]);
        setErrorMsg("");
        // return
    }
  };

  useEffect(() => {
    /* fetch(`http://www.omdbapi.com/?s=interstellar&apikey=${APIKEY}`)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    setMovies(data.Search)
  }); */
    callMovieData();
    //console.log('after initial render')
  }, [query]);
/* 
  useEffect(() => {
    console.log('after every render')
  });

  console.log('during render');

  useEffect(() => {
    console.log('D')
  },[query]) */

  return (
    <>
      <Nav>
        <Search value={query} setQuery={setQuery}></Search>
        <NumResult movies={movies} />
      </Nav>
      <main className="main">
        {/* <Box element={isLoading ? <Loader /> : <MovieList tempMovieData={movies} />} /> */}

        <Box>
          {errorMsg && <Error message={errorMsg} />}
          {isLoading && <Loader></Loader>}
          {!errorMsg && !isLoading && <MovieList tempMovieData={movies} />}
        </Box>

        <Box>
          <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList watched={watched} />
          </>
        </Box>

        {/*  <Box
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          }
        /> */}

        {/* this is public component */}
        {/* <div>{<StarRating maxLength={5} message={["Terrible", "Poor", 'Okay', 'great', "Awsome"]}/>}</div>
        <div>{<StarRating maxLength={10} size={20} color="red" className="test" defaltRating={3}/>}</div>
        <div><StarRating  maxLength={5} onSetRatingHandler={setMovieRating}/>
        <p>This movie rated {movieRating} stars</p></div> */}
      </main>
    </>
  );
}
