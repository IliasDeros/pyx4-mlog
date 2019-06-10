const initialState = {
  logs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOGS_REQUEST':
      state = {
        loading: true
      }
      break;
    case 'FETCH_LOGS_SUCCESS':
      state = {
        logs: action.payload.logs
      }
      break;
    case 'ADD_LOG_SUCCESS':
      const logs = state.logs ? [...state.logs] : []
      logs.push({
        title: action.payload.Title,
        poster_url: action.payload.Poster
      })
      state = {
        logs
      }
      break;
    case 'SET_LOGS':
      state = {
        ...state,
        logs: action.payload.logs
      }
      break;
    default:
      // no default
  }

  return state
}