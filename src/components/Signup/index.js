import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'

import Styles from './styles'
// TODO: Change mocked values
import shoesBrands from './shoesBrands'
import { MenuItem } from '@material-ui/core';

class Signup extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    age: '',
    sex: '',
    favoriteBrand: '',
    selectLabelWidth: 0
  }

  componentDidMount() {
    this.setState({
      selectLabelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  onSubmit = () => {
    console.log('submited')
  }

  onInputChange = ({ currentTarget: { id, value }}) => {
    this.setState({
      [id]: value,
    })
  }

  onSelectChange = ({ currentTarget: {id, value }}) => {
    console.log('¡hola')
  }

  render() {
    const {
      firstName, lastName, userName,
      password, age, sex, favoriteBrand
    } = this.state
    const cs = this.props.classes;

    return (
      <form onSubmit={this.onSubmit} className={cs.form}>
        <FormLabel component="legend"><b>Crear cuenta</b></FormLabel>
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
        <FormControl margin="dense">
          <TextField
            id="password"
            type="password"
            variant="outlined"
            label="Contraseña"
            value={password}
            onChange={this.onInputChange}
            required
          />
        </FormControl>
        <FormControl margin="dense">
          <TextField
            id="age"
            type="number"
            variant="outlined"
            label="Edad"
            value={age}
            onChange={this.onInputChange}
            required
          />
        </FormControl>
        <FormControl margin="dense">
          <TextField
            id="sex"
            variant="outlined"
            label="Sexo"
            value={sex}
            onChange={this.onInputChange}
            required
          />
        </FormControl>
        <FormControl margin="dense" variant="outlined">
          <InputLabel
            htmlFor="favBrand"
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            style={{ marginTop: '1rem' }}
          >
            Marca de tenis preferida
          </InputLabel>
          <Select
            id="favBrand"
            name="favBrand"
            value={favoriteBrand}
            onChange={this.onSelectChange}
            variant="outlined"
            className={cs.selectEmpty}
            input={
              <OutlinedInput
                labelWidth={this.state.selectLabelWidth}
                name="favBrand"
                id="favorite-brand"
              />
            }
            required
          >
            {
              shoesBrands.map(brand => (
                <MenuItem key={brand.id} value={brand.id}>{brand.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={cs.formButton}
        >
          Crear usuario
        </Button>
      </form>
    )
  }
}

export default withStyles(Styles)(Signup);
