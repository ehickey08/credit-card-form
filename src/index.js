import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import App from './App';
import * as reset from './standardStyles/reset.css';
import * as global from './standardStyles/global.css';

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${global}
`;

const theme = {
    borderRadius: '4px',
    fontColor: '#1a3b5d',
    borderColor: '#ced6e0',
    inputHeight: '50px',
    buttonColor: '#2364d2',
    errorColor: '#A50203'
};

const index = Math.floor(Math.random() * 25);

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App index={index}/>
    </ThemeProvider>,
    document.getElementById('root')
);
