import movieService from '../services/movieService'

export const fetchLogsAction = () => async dispatch => {
  dispatch({
    type: 'FETCH_LOGS_REQUEST'
  })

  const response = await movieService.fetchLogs()
  const logs = await response.json()

  dispatch({
    type: 'FETCH_LOGS_SUCCESS',
    payload: { logs }
  })
}

export const logMovieAction = (movie) => async dispatch => {
  await movieService.logMovie(movie)
  dispatch({
    type: 'ADD_LOG_SUCCESS',
    payload: movie
  })
}