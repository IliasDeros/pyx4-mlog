const initialState = {
  user: null,
  requesting: false,
  error: null
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      state = {
        ...initialState,
        requesting: true
      }
      break;
    case 'LOGIN_SUCCESS':
      state = {
        ...initialState,
        user: action.payload.user
      }
      break;
    case 'LOGIN_FAILURE':
      state = {
        ...initialState,
        error: action.payload.error
      }
      break;
    default:
      // no default
  }

  return state
}