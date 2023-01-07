import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from './app/store';
const container = document.getElementById('root');
const root = createRoot(container);
const theme = createTheme({});


root.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  </Provider>
);
