import { Grid, Typography } from '@mui/material';

const List = ({ hasData = true, className, children }) => (
  <Grid container columnSpacing={1} rowSpacing={1} className={className} alignContent="flex-start">
    {!hasData ? (
      <Grid container item xs={8} justifyContent="center" alignContent="center">
        <Typography variant="h6">Items not found</Typography>
      </Grid>
    ) : (
      children
    )}
  </Grid>
);

export default List;
