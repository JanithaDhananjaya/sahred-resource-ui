import React from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import RouteHandler from "./routes/RouteHandler";

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Router>
                    <RouteHandler/>
                </Router>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
