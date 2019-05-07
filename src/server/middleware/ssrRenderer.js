import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Provider as ReduxProvider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import path from 'path';
import fs from 'fs';

import Routes from '../../routes';
import App from '../../App';
import Theme from '../../theme';

function renderFullPage(target, ssrHtml, css) {
  return target.replace(
    '<div id="root"></div>',
    `<div id="root">${ssrHtml}</div>`
  ).replace(
    '<style id="jss-server-side"></style>',
    `<style id="jss-server-side">${css}</style>`
  )
}

export default (store) => (req, res, next) => {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();
  
    // Create a sheetsManager instance.
    const sheetsManager = new Map();
    // Create a new class name generator.
    const generateClassName = createGenerateClassName();
    // Create a theme instance.
    const theme = Theme;

    const context = {}

    const routes = Routes.map(({path}) => (path));
    const match = routes.find(route => matchPath(req.path, {
      path: route,
      exact: true,
    }));
    // bail
    if (!match) {
      next();
      return;
    }

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const html = ReactDOMServer.renderToString(
          <StaticRouter basename="/sand" location={req.url} context={context}>
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
              <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                <SnackbarProvider maxSnack={3}>
                  <ReduxProvider store={store}>
                    <App />
                  </ReduxProvider>
                </SnackbarProvider> 
              </MuiThemeProvider>
            </JssProvider>
          </StaticRouter>
        );

        // inject the rendered app into our html and send it
        return res.send(
          renderFullPage(htmlData, html, sheetsRegistry.toString())
        );
    });
}