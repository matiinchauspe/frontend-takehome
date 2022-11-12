import { Grid } from '@components/shared';

import useStyles from './styles';

const Footer = () => {
  const { classes } = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      className={classes.footer}
      justifyContent="center"
      alignContent="center"
    >
      By Matias Inchauspe - @minchauspe
    </Grid>
  );
};

export default Footer;
