import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes';
import LoadingScreen from './components/LoadingMessage';
import Header from './components/Header';

class App extends React.Component {
  shouldShowHeader = () => {
    const { location: { pathname } } = this.props;
    return !['/login', '/signup'].includes(pathname);
  }

  render() {
    const cs = this.props.classes;
    return (
      <>
        <CssBaseline />
        <LoadingScreen />
      { this.shouldShowHeader() && <Header /> }
        <main className={cs.mainContainer}>
          <Switch>
            <Redirect exact from="/" to="/login" />
            {
              Routes.map(({exact, path, component}) => (
                <Route key={path} exact={exact} path={path} component={component} />
              ))
            }
          </Switch>
        </main>
      </>
    );
  }
}

const styles = {
  mainContainer: {
    background: 'linear-gradient(#f7f7f7, #ffffff)',
    height: '100vh'
  }
}

export default withStyles(styles)(withRouter(App));
