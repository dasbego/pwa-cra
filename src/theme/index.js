import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance. Target Defult Theme
const theme = createMuiTheme({
  breakpoints: {
    
  },
  palete: {
    action: {
      hover: '#00bff4',
      focus: '#00bff4'
    }
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    useNextVariants: true,
  },
});

export default theme;
