import React from 'react';
import UserForm from '../Signup';

const Register = (props) => {
  return (<UserForm
    {...props}
    submitButtonText="Continuar"
  />)
}

export default Register;
