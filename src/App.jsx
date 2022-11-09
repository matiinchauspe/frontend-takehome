import React, { StrictMode } from 'react';
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@mui/material/styles';

import { theme, fetcher } from './utils';
import Routes from './routes';

const App = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <Routes />
      </SWRConfig>
    </ThemeProvider>
  </StrictMode>
);

export default App;
