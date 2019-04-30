export default theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '1rem auto 5rem'
  },
  formButton: {
    marginTop: '1rem',
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  formControlProgress: {
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    bottom: '0.3rem',
    color: '#fffffc'
  },
  FormControlProgress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    
  }
});
