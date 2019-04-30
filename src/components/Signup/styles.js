export default theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '1rem auto 5rem'
  },
  formButton: {
    marginTop: '1rem'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});
