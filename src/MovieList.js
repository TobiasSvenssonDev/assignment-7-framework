import React from 'react'
import Movie from './Movie'

export default function MovieList({ movies, toggleMovie }) {
  return (
    movies.map(movie => {
      return <Movie key={movie.id} toggleMovie={toggleMovie} movie={movie} />
    })
  )
}
