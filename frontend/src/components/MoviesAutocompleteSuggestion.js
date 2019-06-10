import React from 'react'
import PropTypes from 'prop-types'
import MoviesAutocompleteThumbnail from './MoviesAutocompleteThumbnail'

const MoviesAutocompleteSuggestion = ({ movie }) => {
  return <div className="movie-suggestion">
    {movie.logged && <span>LOGGED - </span>}
    <MoviesAutocompleteThumbnail imageUrl={movie.Poster} />
    <span>{movie.Title}</span>
  </div>
}

MoviesAutocompleteSuggestion.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Poster: PropTypes.string
  }).isRequired
}

export default MoviesAutocompleteSuggestion