import { loginAction } from './authenticationAction'
import * as userService from '../services/userService'

jest.mock('../services/userService', () => ({
  login: jest.fn().mockReturnValue(Promise.reject())
}))

let dispatch

beforeEach(() => {
  dispatch = jest.fn()
})

describe('loginAction', () => {
  it('dispatches login request', () => {
    loginAction()(dispatch)
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LOGIN_REQUEST' })
  })

  it('dispatches login failure', async () => {
    await loginAction()(dispatch)
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'LOGIN_FAILURE' })
  })
})