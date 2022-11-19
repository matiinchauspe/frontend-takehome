import MGrid from '@mui/material/Grid';

const Grid = ({ children, ...props }) => (
  <MGrid {...props} data-testid="grid">
    {children}
  </MGrid>
);

export default Grid;
