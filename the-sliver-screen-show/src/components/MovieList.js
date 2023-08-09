import React, {useState} from 'react'
import Movie from './Movie';

const MovieList = ({tempMovieData, onSelectMovie}) => {
 // console.log(tempMovieData , 'tempMovieData')
const [movies, setMovies] = useState(tempMovieData);   
//console.log(movies)
  return (
    <ul className="list list-movies">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie}/>
        ))}
      </ul>
  )
}

export default MovieList