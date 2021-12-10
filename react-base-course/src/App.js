import './App.css';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Routes from "./router/Routes";
import {BrowserRouter} from "react-router-dom";

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
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {/*<div className="App">*/}
                    <Routes/>
                {/*</div>*/}
            </ThemeProvider>
        </BrowserRouter>

    );
}

export default App;