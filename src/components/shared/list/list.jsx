import { Grid } from '@mui/material';

const List = ({ className, children }) => (
  <Grid container columnSpacing={2} rowSpacing={1} className={className}>
    {children}
  </Grid>
);

export default List;
