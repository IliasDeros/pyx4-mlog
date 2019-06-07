import _uniqBy from 'lodash/uniqBy'

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      const movies = state.concat(action.payload.movies)
      state = _uniqBy(movies, m => {
        return m.Title
      })
      break;
    case 'CLEAR_MOVIES':
      state = []
    default:
      // no default
  }

  return state
}