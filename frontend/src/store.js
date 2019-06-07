import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import authentication from './reducers/authenticationReducer'

const rootReducer = combineReducers({
  authentication
})

const initialState = {}

const middleware = applyMiddleware(
  thunk
)

export default createStore(rootReducer, initialState, middleware);