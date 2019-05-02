import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import configureStore from './store';

// Create a theme instance. Target Defult Theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
// Create a new class name generator.
const generateClassName = createGenerateClassName();

ReactDOM.hydrate(
  (<Router basename="/sand">
      <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <Provider store={configureStore()}>
              <App />
            </Provider>
          </SnackbarProvider>
        </MuiThemeProvider>
      </JssProvider>
  </Router>),
  document.getElementById('root'));
