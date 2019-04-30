import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../images/logo.svg';
import { Switch, Route } from 'react-router-dom';

import Login from '../../components/Login';
import Signup from '../../components/Signup';

const LoginPage = ({ classes }) => {
  return (
    <div>
      <header className={classes.container}>
        <img alt="logo" src={Logo} />
      </header>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  }
})

export default withStyles(styles)(LoginPage);
