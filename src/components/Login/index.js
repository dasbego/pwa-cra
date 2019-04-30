import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import { withStyles } from '@material-ui/core/styles';
import cs from 'classnames';
import { mdiTwitterBox, mdiAccountPlus } from '@mdi/js';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Styles from './styles';
import FacebookButton from '../FacebookButton';
import { loginUser } from '../../libraries/api';

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
    const { username, password } = this.state;
    loginUser(username, password)
      .then((res) => {
        this.props.history.push('/events');
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
        <Link to="/recover-account">
          ¿Olvidaste tu contraseña?
        </Link>
        <Divider className={classes.divider} />
        <Grid container direction="column" className={classes.loginGrid}>
          <Grid item className={cs(classes.hCentered, classes.loginGridItem)}>
            <Link to="/signup" className={cs(classes.signupButton, classes.optionalButton)}>
              <Button size="small" fullWidth className={classes.button}>
                <Icon path={mdiAccountPlus} size={1} />
                Crear cuenta
              </Button>
            </Link>
          </Grid>
          <Grid item className={cs(classes.hCentered, classes.loginGridItem)}>
            <FacebookButton size="small" fullWidth />
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

const CompWithRouter = withRouter(Login);
export default withStyles(Styles)(CompWithRouter);