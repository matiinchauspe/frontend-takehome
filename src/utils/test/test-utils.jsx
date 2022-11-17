/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

import { CustomCollectionProvider } from '@components/custom-collection-provider';

const AllTheProviders = ({ children }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CustomCollectionProvider>
        <Router>{children}</Router>
      </CustomCollectionProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
