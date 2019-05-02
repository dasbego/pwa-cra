import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const initialState = {};
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userProfile', 'events'],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeWithDevTools(
  applyMiddleware(thunk)
);

export const configureStore = createStore(
  persistedReducer,
  initialState,
  composedEnhancers,
);

export const persistor = persistStore(configureStore);
