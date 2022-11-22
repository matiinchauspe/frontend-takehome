/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SWRConfig } from 'swr';

import { SWRConfigValue } from '@api';
import { CustomCollectionProvider } from '@components/custom-collection-provider';

const AllTheProviders = ({ children }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* avoid caching for the tests */}
      <SWRConfig value={{ ...SWRConfigValue, dedupingInterval: 0, provider: () => new Map() }}>
        <CustomCollectionProvider>
          <Router>
            <DndProvider backend={HTML5Backend}>{children}</DndProvider>
          </Router>
        </CustomCollectionProvider>
      </SWRConfig>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
