import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import mainReducer from './reducer/reducers'

import App from './components/App';
import './index.css';

var store = createStore(
	mainReducer,
	applyMiddleware(thunkMiddleware)
	);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  	document.getElementById('root')
	
);