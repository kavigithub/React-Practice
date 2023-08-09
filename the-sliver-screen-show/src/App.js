import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Box from "./components/Box";
import Search from "./utils/Search";
import NumResult from "./components/NumResult";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
//import StarRating from "./components/StarRating";
import Loader from "./utils/Loader";
import Error from "./utils/Error";
import MovieDetails from "./components/MovieDetails";

const APIKEY = "16d609ca";

export default function App() {
  const [query, setQuery] = useState("interstellar");
  const [movies, setMovies] = useState();
  const [watched, setWatched] = useState([]);
  const [movieRating, setMovieRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  
  const callMovieData = async () => {
    try {
      setIsLoading(true);
      setErrorMsg(""); //always before we start for the fetching data reset the error
      const res = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${APIKEY}`
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
  };

  const handelSelectedMovie = (id) => {
    // setSelectedId(id)
    setSelectedId((selectedId) => selectedId === id ? null : id); //when u click on the same id will give u null
  };

  const handleCLosedMovie = () => {
    setSelectedId(null);
  };

  const handelAddWatchedMovie = (movie) => {
    setWatched((newWatchedMovie) => [...newWatchedMovie, movie]);
  };

  const handelDeleteWatched = (movieId) => {
    setWatched((deleteMovie) => deleteMovie.filter((item) => item.imdbID !== movieId))
  }

  useEffect(() => {
    callMovieData();
  }, [query]);

  return (
    <>
      <Nav>
        <Search value={query} setQuery={setQuery}></Search>
        <NumResult movies={movies} />
      </Nav>
      <main className="main">
        <Box>
          {errorMsg && <Error message={errorMsg} />}
          {isLoading && <Loader></Loader>}
          {!errorMsg && !isLoading && (
            <MovieList
              tempMovieData={movies}
              onSelectMovie={handelSelectedMovie}
            />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onClosedMovie={handleCLosedMovie}
              APIKEY={APIKEY}
              onAddWatched={handelAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} deleteWachedMovie={handelDeleteWatched}/>
            </>
          )}
        </Box>

        {/* this is public component */}
        {/* <div>{<StarRating maxLength={5} message={["Terrible", "Poor", 'Okay', 'great', "Awsome"]}/>}</div>
        <div>{<StarRating maxLength={10} size={20} color="red" className="test" defaltRating={3}/>}</div>
        <div><StarRating  maxLength={5} onSetRatingHandler={setMovieRating}/>
        <p>This movie rated {movieRating} stars</p></div> */}
      </main>
    </>
  );
}
