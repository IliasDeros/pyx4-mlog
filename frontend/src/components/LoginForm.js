import React, { useState } from 'react';
import _curry from 'lodash/curry'
import { connect } from 'react-redux'
import { loginAction } from '../actions/authenticationAction'

const setValue = (setter, e) => setter(e.target.value)
const handleInput = _curry(setValue)

const Requesting = () => (
  <input type="submit" disabled="disabled" value="Logging in..." />
)

const Submit = ({ login }) => (
  <input type="submit" onClick={login} value="Log in" />
)

const EmptySpace = () => <span>&nbsp;</span>

const LoginForm = ({ authentication, login }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitButton = authentication.requesting 
    ? <Requesting />
    : <Submit login={() => login(email, password)} />

  return <div className="login-form">
    <form id="signup-form">
      <input type="email" name="email" id="email" placeholder="Email Address" value={email} onChange={handleInput(setEmail)} />
      <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={handleInput(setPassword)} />
      {submitButton}
    </form>
    <p className="error text-error">{authentication.error || <EmptySpace />}</p>
  </div>
}

const mapStateToProps = ({ authentication }) => ({
  authentication
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginAction(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)