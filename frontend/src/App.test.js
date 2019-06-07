import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store'
import App from './App';

const initialState = {
  authentication: {},
  movies: []
}
const mockStore = configureStore()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={mockStore(initialState)}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
