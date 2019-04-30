import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import { withStyles } from '@material-ui/core/styles';
import cs from 'classnames';
import { mdiTwitterBox, mdiAccountPlus } from '@mdi/js';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

import Styles from './styles';
import FacebookButton from '../FacebookButton';
import { loginUser } from '../../libraries/api';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
  }

  onTextChange = ({ currentTarget: { id, value }}) => {
    this.setState({
      [id]: value,
    })
  }

  saveToken = (token) => {
    sessionStorage.setItem('sess_tk', token);
  }

  login = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    loginUser(username, password)
      .then(({ data: { body } }) => {
        this.props.enqueueSnackbar(`Welcome back ${body.firstName}!`, {
          variant: 'info',
          autoHideDuration: 5000
        });
        this.saveToken(body.token);
        this.props.history.push('/events');
      })
      .catch(err => {
        this.props.enqueueSnackbar(`${err.message}`, {
          variant: 'error',
          autoHideDuration: 5000
        });
      });
  }
  
  handleClickShowPassword = () => {
    this.setState(prev => ({ showPassword: !prev.showPassword }))
  }

  render() {
    const { username, password } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.loginContainer}>
        <form onSubmit={this.login} className={classes.form}>
          <FormLabel component="legend"><b>Login</b></FormLabel>
          <FormControl margin="dense">
            <TextField
              id="username"
              margin="dense"
              variant="outlined"
              label="Email"
              value={username}
              onChange={this.onTextChange}
              required
            />
          </FormControl>
          <FormControl margin="dense">
            <TextField
              id="password"
              className={cs(classes.margin, classes.textField)}
              variant="outlined"
              type={this.state.showPassword ? 'text' : 'password'}
              label="Contraseña"
              value={password}
              onChange={this.onTextChange}
              pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.loginButton}
            size="medium"
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

const CompWithRouter = withRouter(withSnackbar(Login));
export default withStyles(Styles)(CompWithRouter);