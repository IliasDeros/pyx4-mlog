import React, { useState } from 'react';
import _curry from 'lodash/curry'
import { connect } from 'react-redux'
import MoviesAutocomplete from './MoviesAutocomplete'

const setValue = (setter, e) => setter(e.target.value)
const handleInput = _curry(setValue)

const Movies = () => {
  return <div>
    <h1>Movies Autocomplete</h1>
    <MoviesAutocomplete />
  </div>
}

const mapStateToProps = ({  }) => ({
  
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)