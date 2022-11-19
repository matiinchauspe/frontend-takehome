/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { CustomCollectionProvider } from '@components/custom-collection-provider';

const AllTheProviders = ({ children }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CustomCollectionProvider>
        <Router>
          <DndProvider backend={HTML5Backend}>{children}</DndProvider>
        </Router>
      </CustomCollectionProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
