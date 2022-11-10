import React, { StrictMode } from 'react';
// import { SWRConfig } from 'swr';
import { ThemeProvider } from '@mui/material/styles';

// import { SWRConfigValue } from './api';
import { theme } from './utils';
import Routes from './routes';

const App = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* <SWRConfig value={SWRConfigValue}> */}
      <Routes />
      {/* </SWRConfig> */}
    </ThemeProvider>
  </StrictMode>
);

export default App;
