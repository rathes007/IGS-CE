import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";


const theme = createTheme({
    palette: {
      primary: {
        main: "#84342D",
      },
      secondary: {
        main: "#F6C290",
      },
      white: {
        main: "#FFFFFF",
      },
    },
  });

  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

