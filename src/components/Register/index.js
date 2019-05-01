import React from 'react';
import UserForm from '../Signup';
import { connect } from 'react-redux';

const Register = (props) => {
  return (<UserForm
    {...props.userProfile}
    mode="edit"
    formTitle="Completar registro"
    submitButtonText="Continuar"
  />)
}

const mapStateToProps = ({userProfile}) => ({
  userProfile
});

export default connect(mapStateToProps, null)(Register);
