import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { matchPath, StaticRouter } from 'react-router'
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

// import our main App component
import App from '../../App';

const path = require("path");
const fs = require("fs");

function renderFullPage(target, ssrHtml, css) {
  return target.replace(
    '<div id="root"></div>',
    `<div id="root">${ssrHtml}</div>`
  ).replace(
    '<style id="jss-server-side"></style>',
    `<style id="jss-server-side">${css}</style>`
  )
}

export default (req, res, next) => {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();
  
    // Create a sheetsManager instance.
    const sheetsManager = new Map();
    // Create a new class name generator.
    const generateClassName = createGenerateClassName();
    // Create a theme instance.
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true,
      },
    });

    const context = {}

    const routes = ['/', '/login', '/events', ''];
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
    const filePath = path.resolve(__dirname, '..', '..', '..','build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const html = ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
              <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                  <App />
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