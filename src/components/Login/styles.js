export default theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: theme.spacing.unit
  },
  loginButton: {
    marginTop: theme.spacing.unit
  },
  hCentered: {
    display: 'flex',
    justifyContent: 'center',
  },
  forgotPwd: {
    alignSelf: 'flex-end',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: 'auto'
  },
  buttonGrid: {
    padding: '2rem 2rem',
  },
  buttonGridItemButton: {
    margin: theme.spacing.unit,
  },
  buttonAlignment: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 'auto 0.3rem'
  },
  buttonIcon: {
    margin: '0 0.3rem',
    width: '24px',
    height: '24px'
  },
  signupButton: {
    textDecoration: 'none',
    color: 'black'
  },
  optionalButton: {
    width: '100%'
  },
  divider: {
    margin: '1rem 0',
    width: '100%'
  }
});
