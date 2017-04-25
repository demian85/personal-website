import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const logger = createLogger({ collapsed: true });

const middleware = [thunk, logger];

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
