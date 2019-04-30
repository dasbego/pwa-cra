import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        {
          Routes.map(({exact, path, component}) => (
            <Route key={path} exact={exact} path={path} component={component} />
          ))
        }
      </Switch>
    );
  }
}

export default App;
