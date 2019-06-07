import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import _curry from 'lodash/curry'
import { connect } from 'react-redux'
import { clearMoviesAction, fetchMoviesAction } from '../actions/movieAction'
import inputHelper from '../helpers/inputHelper'

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.Title}</span>
  );
}

function filterMovies(movies, searchTerm) {
  const regex = new RegExp(`\\b${searchTerm}\\b`, 'i')
  return movies.filter(movie => movie.Title.match(regex))
}

const MoviesAutocomplete = ({ clearMovies, fetchMovies, movies }) => {
  const [value, setValue] = useState('')
  const inputProps = {
    placeholder: "Type 'c'",
    value,
    onChange: inputHelper.handleInput(setValue)
  };
  const fetchSuggestions = ({ value }) => fetchMovies(value)
  const clearSuggestions = () => clearMovies()
  const suggestions = filterMovies(movies, value)

  return (
    <div class="movies-autocomplete">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={fetchSuggestions}
        onSuggestionsClearRequested={clearSuggestions}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
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
  fetchMovies: searchTerm => dispatch(fetchMoviesAction(searchTerm))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesAutocomplete)