import React from 'react';
import './App.css';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Routes from "./router/Routes";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import {persistor, store} from "./store/index";
import {PersistGate} from "redux-persist/integration/react";
import {CircularProgress} from "@mui/material";

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
            <PersistGate persistor={persistor} loading={<CircularProgress />}>
                <BrowserRouter>
                        <ThemeProvider theme={theme}>
                            <Routes/>
                        </ThemeProvider>
                </BrowserRouter>
            </PersistGate>
        </Provider>

    );
}

export default App;