import { useState } from 'react';
import useSWR from 'swr';
import { Grid } from '@mui/material';

import { CollectionsMock } from '@services';

import { Select, Card } from '@components/shared';
import { TokensList } from './tokens-list';

import useStyles from './styles';

const CollectionSelect = () => {
  const url = 'https://api.reservoir.tools/collections/v5';
  const { data, error } = useSWR(url);
  const [age, setAge] = useState('');

  console.log(data);

  const { classes } = useStyles();

  return (
    <Grid container item sm={4} className={classes.container}>
      {/* Select the collection */}
      <Grid item xs={12}>
        <Select />
      </Grid>
      {/* Tokens list */}
      <TokensList className={classes.list}>
        {CollectionsMock.TokensMock.tokens.map(({ token }) => (
          <Grid item xs key={token.tokenId}>
            <Card src={token.image} title={token.name} lastSale={token.lastSell} />
          </Grid>
        ))}
      </TokensList>
    </Grid>
  );
};

export default CollectionSelect;
