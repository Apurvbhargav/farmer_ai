import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2f6f3e',
      dark: '#285f35',
      light: '#e7f3e9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8a6f2a',
      dark: '#6f561f',
      light: '#f7efd6',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f7f2',
      paper: '#ffffff',
    },
    text: {
      primary: '#1f3326',
      secondary: '#617064',
    },
    error: {
      main: '#c2410c',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'sans-serif',
    ].join(','),
    h3: {
      letterSpacing: 0,
    },
    h4: {
      letterSpacing: 0,
    },
    button: {
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#ffffff',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2f6f3e',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2f6f3e',
            borderWidth: 2,
          },
        },
        notchedOutline: {
          borderColor: '#d8e2d4',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#617064',
          '&.Mui-focused': {
            color: '#2f6f3e',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;