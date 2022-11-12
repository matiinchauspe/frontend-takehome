import Grid from '@mui/material/Grid';

const List = ({ className, children }) => (
  <Grid container columnSpacing={1} rowSpacing={1} className={className}>
    {children}
  </Grid>
);

export default List;
