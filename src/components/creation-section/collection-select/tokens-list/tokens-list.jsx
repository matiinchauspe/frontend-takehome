import { Grid } from '@mui/material';

const TokensList = ({ className, children }) => (
  <Grid item container columnSpacing={2} rowSpacing={1} className={className}>
    {children}
  </Grid>
);

export default TokensList;
