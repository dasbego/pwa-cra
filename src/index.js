import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

// Create a theme instance. Target Defult Theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
// Create a new class name generator.
const generateClassName = createGenerateClassName();

ReactDOM.hydrate(
  (<Router>
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  </Router>),
  document.getElementById('root'));
