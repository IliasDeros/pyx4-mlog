import _memoize from 'lodash/memoize'
import movieService from '../services/movieService'

const getJson = _memoize((res => res.json()), res => res.url)

export const fetchMoviesAction = searchTerm => async (dispatch, getState) => {
  dispatch({
    type: 'FETCH_MOVIES_REQUEST',
    payload: { searchTerm }
  })

  try {
    const response = await movieService.fetchMovies(searchTerm)
    const json = await getJson(response)
    if (json.Error) {
      throw json.Error
    }
    fetchSuccess(json.Search)
  } catch (e) {
    console.error(e)
  }

  function fetchSuccess(movies) {
    const { logs } = getState()

    movies.forEach(movie => 
      movie.logged = logs.logs.some(log => log.title === movie.Title)
    )
    dispatch({
      type: 'FETCH_MOVIES_SUCCESS',
      payload: { movies }
    })
  }
}

export const clearMoviesAction = () => ({
  type: 'CLEAR_MOVIES'
})