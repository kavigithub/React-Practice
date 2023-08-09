import React from 'react'
import WatchedMovie from './WatchedMovie'

const WatchedMovieList = ({watched, deleteWachedMovie}) => {
  return (
    <ul className="list">
    {watched.map((movie) => (
      <WatchedMovie movie={movie} key={movie.imdbID} deleteWachedMovie={deleteWachedMovie}/>
    ))}
  </ul>
  )
}

export default WatchedMovieList