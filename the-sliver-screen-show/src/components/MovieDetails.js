import React, { useEffect, useState } from "react";
import StarRating from './StarRating';
import Loader from "../utils/Loader";

const MovieDetails = ({ selectedId, onClosedMovie, APIKEY, onAddWatched, watched}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState('');

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  console.log(isWatched, 'isWatched');

  const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre
  } = movie;

  const onHandelAddWatched = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: parseFloat((imdbRating * 10).toFixed()) / 10, 
      releaseYear: parseInt(`${year}`.slice(-4)),
      runtime: Number(runtime.split(" ").at(0)),
      userRating
    }

    onAddWatched(newWatchedMovie);
    onClosedMovie();
  }
  
  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    };
    getMovieDetails();
  }, [APIKEY, selectedId]);

  return (
    <div className="details">
    { isLoading ? <Loader /> : (
      <>
        <header>
          <button className="btn-back" onClick={onClosedMovie}>
            &larr;
          </button>
          <img src={poster} alt={`Poster of ${movie} movie`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>⭐️</span>
              {imdbRating} IMDb rating
            </p>
          </div>
        </header>

        {/* <p>{avgRating}</p> */}

        <section>
         {!isWatched ? <>
          <div className="rating">
                <StarRating
                 maxLength={10}
                 size={24}
                 onSetRatingHandler={setUserRating}
                />
             {userRating > 0 &&  <button className="btn-add" onClick={onHandelAddWatched}>+ Add to List</button>}  
          </div> 
         </>
          : <p className="rating">YOu rated this movie {watchedUserRating} ⭐️</p>
          }
          <p>
            <em>{plot}</em>
          </p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
        </section>
      </>
    )}
  </div>
  );
};

export default MovieDetails;
