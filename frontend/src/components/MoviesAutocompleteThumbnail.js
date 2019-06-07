import React from 'react'
import PropTypes from 'prop-types'
import './MoviesAutocompleteThumbnail.css'

const MoviesAutocompleteThumbnail = ({ imageUrl }) => {
  if (!imageUrl || imageUrl === 'N/A') {
    return null
  }

  return <img className="movie-thumbnail" src={imageUrl} alt="thumb" />
}

MoviesAutocompleteThumbnail.propTypes = {
  imageUrl: PropTypes.string
}

export default MoviesAutocompleteThumbnail