import React from 'react'

export default function Movie({ movie, toggleMovie }) {
  function handleMovieClick() {
    toggleMovie(movie.id)
  }
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={movie.complete} onChange={handleMovieClick} />
        {movie.name}
      </label>
    </div>
  )
}