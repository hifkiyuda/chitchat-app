import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import './styles/style.css';
import store from './states';

const theme = {
  colors: {
    black: 'var(--black)',
    white: 'var(--white)',
    grey: 'var(--grey)',
    lightBlue: 'var(--light-blue)',
    darkBlue: 'var(--dark-blue)',
  },
};

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
);
