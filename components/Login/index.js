import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import { withStyles } from '@material-ui/core/styles';
import cs from 'classname';
import { mdiFacebookBox, mdiTwitterBox } from '@mdi/js';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';
import Router from 'next/router'

import Styles from './styles';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  onTextChange = ({ currentTarget: { id, value }}) => {
    this.setState({
      [id]: value,
    })
  }

  login = () => {
    Router.push({
      pathname: '/events'
    })
  }

  render() {
    const { username, password } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.loginContainer}>
        <form className={classes.form}>
          <FormLabel component="legend"><b>Login</b></FormLabel>
          <TextField
            id="username"
            margin="dense"
            variant="outlined"
            label="Email"
            value={username}
            onChange={this.onTextChange}
          />
          <TextField
            id="password"
            margin="dense"
            variant="outlined"
            label="Contraseña"
            type="password"
            value={password}
            onChange={this.onTextChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.loginButton}
            size="medium"
            onClick={this.login}
          >
            Login
          </Button>
        </form>
        <Link href="/recover-account">
          <a>¿Olvidaste tu contraseña?</a>
        </Link>
        <Divider variant="fullWidth" />
        <Grid container direction="column" className={classes.loginGrid}>
          <Grid item className={cs(classes.hCentered, classes.loginGridItem)}>
            <Button size="small" fullWidth className={classes.button}>
              Crear cuenta
            </Button>
          </Grid>
          <Grid item className={cs(classes.hCentered, classes.loginGridItem)}>
            <Button size="small" fullWidth className={classes.button}>
              <Icon path={mdiFacebookBox} size={1} />
              Login con Facebook
            </Button>
          </Grid>
          <Grid item className={cs(classes.hCentered, classes.loginGridItem)}>
            <Button size="small" fullWidth className={classes.buttonGridItemButton}>
            <Icon path={mdiTwitterBox} size={1} />
            Login con Twitter
          </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(Styles)(Login);