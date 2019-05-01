import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const composedEnhancers = composeWithDevTools(
  applyMiddleware(thunk)
);

const configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );
};

export default configureStore;
