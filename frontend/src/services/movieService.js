import _memoize from 'lodash/memoize'
import requestHelper from '../helpers/requestHelper'

export default {
  apiKey: process.env.REACT_APP_OMDb_API_KEY,
  MOVIE_API: 'http://www.omdbapi.com',
  TYPE_MOVIE: 'movie',
  logMovie,
  fetchLogs,
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

function fetchLogs() {
  return requestHelper.get('/logs')
}

function logMovie({ Title: title, Poster: poster_url }) {
  const movie = { title, poster_url }
  return requestHelper.post('/log', movie)
}

function unlogMovie(id) {
  return requestHelper.del(`/log/${id}`)
}