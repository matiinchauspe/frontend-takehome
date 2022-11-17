import { forwardRef } from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';

const List = forwardRef(
  (
    {
      hasData = true,
      noDataMessage = 'Items not found',
      isLoading,
      cols = 12,
      centered = false,
      className,
      children,
    },
    ref
  ) => {
    // TODO: review this later - test problem
    // const theme = useTheme();
    // const defaultCols = 12;

    return (
      <Grid
        ref={ref}
        container
        justifyContent={centered ? 'center' : 'flex-start'}
        className={className}
      >
        {!hasData && !isLoading && (
          <Grid container item xs={12} justifyContent="center" alignContent="center">
            <Typography variant="h6" fontWeight={300} color="GrayText">
              {noDataMessage}
            </Typography>
          </Grid>
        )}
        {hasData && !isLoading && (
          <Grid
            container
            item
            gap={1}
            alignContent="flex-start"
            xs={cols}
            justifyContent={centered ? 'center' : 'flex-start'}
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
  }
);

export default List;
