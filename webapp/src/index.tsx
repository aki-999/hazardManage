import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import * as UI from '@mui/material';
import Map from './Map/Map';
import * as Icon from '@mui/icons-material';


const rootElement = document.getElementById('root');
rootElement!.className = "main";
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App mode='map' />
  </ThemeProvider>,
);