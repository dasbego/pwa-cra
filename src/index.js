import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import { configureStore, persistor } from './store';
import Theme from './theme';

// Create a new class name generator.
const generateClassName = createGenerateClassName();

ReactDOM.hydrate(
  (<Router basename="/sand">
      <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={Theme}>
          <SnackbarProvider maxSnack={3}>
            <Provider store={configureStore}>
              <PersistGate persistor={persistor}>
                <App />
              </PersistGate>
            </Provider>
          </SnackbarProvider>
        </MuiThemeProvider>
      </JssProvider>
  </Router>),
  document.getElementById('root'));
