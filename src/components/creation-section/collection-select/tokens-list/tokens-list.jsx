import { Grid } from '@mui/material';

const TokensList = ({ className, children }) => {
  return (
    <Grid item container spacing={2} marginBottom="10px" className={className}>
      {children}
    </Grid>
  );
};

export default TokensList;
