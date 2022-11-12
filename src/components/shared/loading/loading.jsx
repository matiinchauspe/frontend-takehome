import { Grid, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Grid container justifyContent="center" height="50%" alignContent="center">
      <Grid item xs={6} textAlign="center">
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loading;
