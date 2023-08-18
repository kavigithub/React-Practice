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
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

const APIKEY = "16d609ca";

export default function App() {
  const [query, setQuery] = useState("interstellar");

  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, errorMsg } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  //never do this...never used like this..here we are calling function... not passing function in.
  //const [watched, setWatched] = useState(localStorage.getItem('watched'));

  const handelSelectedMovie = (id) => {
    // setSelectedId(id)
    setSelectedId((selectedId) => (selectedId === id ? null : id)); //when u click on the same id will give u null
  };

  const handleCLosedMovie = () => {
    setSelectedId(null);
  };

  const handelAddWatchedMovie = (movie) => {
    setWatched((newWatchedMovie) => [...newWatchedMovie, movie]);
    //another option is add in use effect
    //  localStorage.setItem('watched', JSON.stringify([...watched, movie]))
  };

  const handelDeleteWatched = (movieId) => {
    setWatched((deleteMovie) =>
      deleteMovie.filter((item) => item.imdbID !== movieId)
    );
  };

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
          {selectedId && query ? (
            <MovieDetails
              selectedId={selectedId}
              /* onClosedMovie={handleCLosedMovie} */
              APIKEY={APIKEY}
              onAddWatched={handelAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                deleteWachedMovie={handelDeleteWatched}
              />
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
