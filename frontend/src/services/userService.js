import requestHelper from '../helpers/requestHelper'

export default {
  login
}

function login(email, password) {
  return requestHelper.post('/login', { email, password })
}