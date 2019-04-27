import React from 'react';
import Login from '../../components/Login';
import { withStyles } from '@material-ui/core/styles';

const LoginPage = ({ classes }) => {
  return (
    <div>
      <header className={classes.container}>
        <img src="/static/logo_alt.png" />
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
