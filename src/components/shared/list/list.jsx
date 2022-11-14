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
      <Grid container item xs={8} justifyContent="center" alignContent="center">
        <Typography variant="h6" fontWeight={300} color="GrayText">
          {noDataMessage}
        </Typography>
      </Grid>
    )}
    {hasData && !isLoading && (
      <Grid
        container
        columnSpacing={1}
        rowSpacing={1}
        alignContent="flex-start"
        justifyContent="center"
      >
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
