import _memoize from 'lodash/memoize'
import requestHelper from '../helpers/requestHelper'

export default {
  apiKey: '383a2e5d',  // replace this with process.env...
  MOVIE_API: 'http://www.omdbapi.com',
  TYPE_MOVIE: 'movie',
  fetchMovies: _memoize(fetchMovies)
}

function fetchMovies(searchTerm) {
  const queryParams = {
    s: searchTerm,
    apiKey: this.apiKey,
    type: this.TYPE_MOVIE
  }

  return requestHelper.withAPI(this.MOVIE_API).get('/', queryParams)
}
