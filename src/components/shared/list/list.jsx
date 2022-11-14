import { Grid, Typography, CircularProgress } from '@mui/material';

const List = ({
  hasData = true,
  noDataMessage = 'Items not found',
  isLoading,
  className,
  children,
}) => (
  <Grid container className={className}>
    {!hasData && !isLoading && (
      <Grid container item xs={12} justifyContent="center" alignContent="center">
        <Typography variant="h6" fontWeight={300} color="GrayText">
          {noDataMessage}
        </Typography>
      </Grid>
    )}
    {hasData && !isLoading && (
      <Grid container item spacing={1} alignContent="flex-start" justifyContent="center" xs={12}>
        {children}
      </Grid>
    )}
    {isLoading && (
      <Grid container item xs={12} alignContent="center" justifyContent="center">
        <CircularProgress />
      </Grid>
    )}
  </Grid>
);

export default List;
