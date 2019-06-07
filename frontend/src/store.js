import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import authentication from './reducers/authenticationReducer'
import movies from './reducers/moviesReducer'

const rootReducer = combineReducers({
  authentication,
  movies
})

const initialState = {}

const middleware = applyMiddleware(
  thunk
)

export default createStore(rootReducer, initialState, middleware);