import React from 'react';
import Login from '../../components/Login';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../images/logo.svg';

const LoginPage = ({ classes }) => {
  return (
    <div>
      <header className={classes.container}>
        <img alt="logo" src={Logo} />
      </header>
      <Login />
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
