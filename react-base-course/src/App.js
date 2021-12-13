import React from 'react';
import './App.css';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Routes from "./router/Routes";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store/index";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#4fb3bf',
                main: '#00838f',
                dark: '#005662',
                contrastText: '#fff',
              },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
          },

      });

    return (
        <Provider store={store}>
        <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Routes/>
                </ThemeProvider>
        </BrowserRouter>
        </Provider>

    );
}

export default App;