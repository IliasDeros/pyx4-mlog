import React from 'react';
import { connect } from 'react-redux'
import MoviesAutocomplete from './MoviesAutocomplete'

const Movies = () => {
  return <div>
    <h1>Movies Autocomplete</h1>
    <MoviesAutocomplete />
  </div>
}

const mapStateToProps = () => ({
  
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)