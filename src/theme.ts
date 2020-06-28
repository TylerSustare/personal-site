import { createMuiTheme } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#39ff14',
    },
    secondary: {
      main: purple[500],
    },
    error: {
      main: red.A400,
    },
    background: { default: '#333' },
  },
  typography: {
    fontSize: 16,
  },
});

export default theme;
