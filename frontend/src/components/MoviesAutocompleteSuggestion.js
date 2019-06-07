import React from 'react'
import MoviesAutocompleteThumbnail from './MoviesAutocompleteThumbnail'

const MoviesAutocompleteSuggestion = (movie) => (
  <div className="movie-suggestion">
    <MoviesAutocompleteThumbnail imageUrl={movie.Poster} />
    <span>{movie.Title}</span>
  </div>
)

export default MoviesAutocompleteSuggestion