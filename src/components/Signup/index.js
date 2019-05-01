import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Cls from 'classnames';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserProfile } from '../../store/actions/userProfile';

import Styles from './styles'
// TODO: Change mocked values
import shoesBrands from './shoesBrands';
import { signupUser } from '../../libraries/api';
import { routerPaths } from '../../routes';

class Signup extends React.Component {
  state = {
    firstName: this.props.firstName || '',
    lastName: this.props.lastName || '',
    userName: this.props.userName || '',
    password: '',
    showPassword: false,
    age: '',
    sex: '',
    favoriteBrand: '',
    selectLabelWidth: 0,
    sexLabelWidth: 0,
    isLoading: false,
    submitButtonText: this.props.submitButtonText || 'Unirse ahora',
    formTitle: this.props.formTitle || 'Crear cuenta'
  }

  componentDidMount() {
    this.setState({
      selectLabelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
      sexLabelWidth: ReactDOM.findDOMNode(this.sexLabelRef).offsetWidth
    });
  }

  saveToken = (token) => {
    sessionStorage.setItem('sess_tk', token);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {
      firstName, lastName, userName, password,
      favoriteBrand, age, sex
    } = this.state;
    const reqData = {
      firstName, lastName, userName,
      password, favoriteBrand, age, sex 
    }
    signupUser(reqData)
      .then(({data}) => {
        this.saveToken(data.body.token)
        this.props.updateUserProfile(data.body);
        this.props.enqueueSnackbar('Usuario creado', {
          variant: 'success',
          autoHideDuration: 5000
        })
        this.props.enqueueSnackbar(data.message, {
          variant: 'info',
          autoHideDuration: 5000
        })
        this.props.history.push(routerPaths.events);
      })
  }

  onInputChange = ({ currentTarget: { id, value }}) => {
    this.setState({
      [id]: value,
    })
  }

  onSelectChange = ({ target: { name, value }}) => {
    this.setState({
      [name]: value
    })
  }
  
  handleClickShowPassword = () => {
    this.setState(prev => this.setState({ showPassword: !prev.showPassword }))
  }

  render() {
    const {
      firstName, lastName, userName,
      password, age, sex, favoriteBrand,
      isLoading, submitButtonText, formTitle
    } = this.state
    const cs = this.props.classes;
    const { mode } = this.props;

    return (
      <form onSubmit={this.onSubmit} className={cs.form}>
        <FormLabel component="legend"><b>{formTitle}</b></FormLabel>
        <FormControl margin="dense">
          <TextField
            id="firstName"
            variant="outlined"
            label="Nombre"
            value={firstName}
            onChange={this.onInputChange}
            required
          />
        </FormControl>
        <FormControl margin="dense">
          <TextField
            id="lastName"
            variant="outlined"
            label="Apellido"
            value={lastName}
            onChange={this.onInputChange}
            required
          />
        </FormControl>
        <FormControl margin="dense">
          <TextField
            id="userName"
            type="email"
            variant="outlined"
            label="Email"
            value={userName}
            onChange={this.onInputChange}
            required
          />
          <FormHelperText>Este será tu nombre de usuario.</FormHelperText>
        </FormControl>
        {
          mode !== 'edit' && (
            <FormControl margin="dense">
              <TextField
                id="password"
                className={Cls(cs.margin, cs.textField)}
                variant="outlined"
                type={this.state.showPassword ? 'text' : 'password'}
                label="Contraseña"
                value={password}
                onChange={this.onInputChange}
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
          )
        }
        <FormControl margin="dense">
          <TextField
            id="age"
            variant="outlined"
            label="Edad"
            value={age}
            onChange={this.onInputChange}
            type="number"
            pattern="[0-9]*"
            inputMode="tel"
          />
        </FormControl>
        <FormControl margin="dense" variant="outlined">
          <InputLabel
              htmlFor="sex"
              ref={ref => {
                this.sexLabelRef = ref;
              }}
            >
              Sexo
            </InputLabel>
            <Select
              id="sex"
              name="sex"
              value={sex}
              onChange={this.onSelectChange}
              variant="outlined"
              input={
                <OutlinedInput
                  labelWidth={this.state.sexLabelWidth}
                  name="sex"
                  id="sex-select"
                />
              }
            >
            <MenuItem value="M">Masculino</MenuItem>
            <MenuItem value="F">Femenino</MenuItem>
            <MenuItem value="O">Otro</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="dense" variant="outlined">
          <InputLabel
            htmlFor="favBrand"
            ref={ref => {
              this.InputLabelRef = ref;
            }}
          >
            Marca de tenis preferida
          </InputLabel>
          <Select
            id="favoriteBrand"
            name="favoriteBrand"
            value={favoriteBrand}
            onChange={this.onSelectChange}
            variant="outlined"
            input={
              <OutlinedInput
                labelWidth={this.state.selectLabelWidth}
                name="favBrand"
                id="favorite-brand"
              />
            }
          >
            {
              shoesBrands.map(brand => (
                <MenuItem key={brand.id} value={brand.name}>{brand.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <FormControl className={Cls(
          cs.FormControlProgress,
          isLoading ? cs.loading : ''
          )}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={cs.formButton}
          >
            {submitButtonText}
          </Button>
          {isLoading && (<CircularProgress size={24} className={cs.buttonProgress} />)}
        </FormControl>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateUserProfile
}, dispatch);

export default withStyles(Styles)(
  withSnackbar(
    connect(null, mapDispatchToProps)(Signup)
  )
);
