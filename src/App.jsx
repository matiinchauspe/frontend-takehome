import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material/styles';

import { CustomCollectionProvider } from '@components/custom-collection-provider';

// import { SWRConfigValue } from './api';
import { theme } from './utils';
import Routes from './routes';

const App = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* <SWRConfig value={SWRConfigValue}> */}
      <CustomCollectionProvider>
        <Routes />
      </CustomCollectionProvider>
      <Toaster position="bottom-center" />
      {/* </SWRConfig> */}
    </ThemeProvider>
  </StrictMode>
);

export default App;
