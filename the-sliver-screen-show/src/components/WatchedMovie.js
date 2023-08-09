import React from 'react'

const WatchedMovie = ({movie, deleteWachedMovie}) => {
  return (
    <li>
    <img src={movie.Poster} alt={`${movie.title} poster`} />
    <h3>{movie.title}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{movie.imdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{movie.userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{movie.runtime} min</span>
      </p>
    </div>
    <button className='btn-delete' onClick={() => deleteWachedMovie(movie.imdbID)}>❌</button>
  </li>
  )
}

export default WatchedMovie