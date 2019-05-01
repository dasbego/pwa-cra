import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../images/logo.svg';
import { Switch, Route } from 'react-router-dom';

import Login from '../../components/Login';
import Signup from '../../components/Signup';
import Register from '../../components/Register';
import { withRouter } from 'react-router-dom';
import { routerPaths } from '../../routes';

class LoginPage extends React.Component {
  componentDidMount() {
    if (sessionStorage.getItem('sess_tk')) {
      this.props.history.push(routerPaths.events);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <header className={classes.container}>
          <img alt="logo" src={Logo} />
        </header>
        <Switch>
          <Route exact path={routerPaths.login} component={Login} />
          <Route exact path={routerPaths.signup} component={Signup} />
          <Route exact path={routerPaths.register} component={Register} />
        </Switch>
      </div>
    );
  }
}

const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  }
})

export default withStyles(styles)(withRouter(LoginPage));
