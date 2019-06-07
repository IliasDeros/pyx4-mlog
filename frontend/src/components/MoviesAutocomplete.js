import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux'
import { clearMoviesAction, fetchMoviesAction, selectMovieAction } from '../actions/movieAction'
import inputHelper from '../helpers/inputHelper'
import MoviesAutocompleteSuggestion from './MoviesAutocompleteSuggestion'
import './MoviesAutocomplete.css'

function getSuggestionValue(suggestion) {
  return suggestion.Title;
}

function filterMovies(movies, searchTerm) {
  const regex = new RegExp(`\\b${searchTerm}\\b`, 'i')
  return movies.filter(movie => movie.Title.match(regex))
}

const MoviesAutocomplete = ({ clearMovies, fetchMovies, selectMovie, movies }) => {
  const [value, setValue] = useState('')
  const inputProps = {
    placeholder: "Type 'c'",
    value: value || '',
    onChange: inputHelper.handleInput(setValue)
  };
  const fetchSuggestions = ({ value }) => fetchMovies(value)
  const clearSuggestions = () => clearMovies()
  const selectSuggestion = (_, { suggestion }) => selectMovie(suggestion)
  const suggestions = filterMovies(movies, value)

  return (
    <div className="movies-autocomplete">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={fetchSuggestions}
        onSuggestionsClearRequested={clearSuggestions}
        onSuggestionSelected={selectSuggestion}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={MoviesAutocompleteSuggestion}
        inputProps={inputProps}
      />
    </div>
  )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

const mapDispatchToProps = dispatch => ({
  clearMovies: () => dispatch(clearMoviesAction()),
  fetchMovies: searchTerm => dispatch(fetchMoviesAction(searchTerm)),
  selectMovie: movie => dispatch(selectMovieAction(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesAutocomplete)