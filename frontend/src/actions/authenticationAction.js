import userService from '../services/userService'

export const loginAction = (email, password) => async dispatch => {
  dispatch({
    type: 'LOGIN_REQUEST'
  })

  try {
    const response = await userService.login(email, password)  
    if (!response.ok) {
      throw await response.json()
    }
    loginSuccess()
  } catch (e) {
    loginFail(e)
  }

  function loginSuccess() {
    dispatch({
      type: 'LOGIN_SUCCESS'
    })
  }

  function loginFail(e) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: e
    })
  }
}
