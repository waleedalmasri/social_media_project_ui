import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from 'react-i18next';
import { i18next } from './i18n';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theming/themes';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
        <I18nextProvider i18n={i18next}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
            <App />
            </Provider>
          </ThemeProvider>
        </I18nextProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
