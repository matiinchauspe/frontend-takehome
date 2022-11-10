import { useState, useCallback, Suspense } from 'react';

import { Grid, Typography, Button, Skeleton } from '@mui/material';

import { CollectionsMock } from '@services';
import { useCollections, useTokens } from '@hooks';

import { Select, Card } from '@components/shared';
import { TokensList } from './tokens-list';

import useStyles from './styles';

const CollectionSelect = () => {
  const [collectionSelected, setCollectionSelected] = useState('');
  const { data: collections } = useCollections();
  const { data: tokens } = useTokens(collectionSelected);

  // TODO: remove this later
  console.log({ collections });
  console.log({ tokens });

  const { classes } = useStyles();

  const handleSelect = useCallback((val) => {
    setCollectionSelected(val);
  }, []);

  return (
    <Grid container item sm={4} className={classes.container}>
      {/* Select the collection */}
      <Grid item xs={12}>
        <Suspense fallback={<Skeleton variant="rounded" width={210} height={60} />}>
          <Select
            items={collections?.collections}
            selectedValue={collectionSelected}
            onChange={handleSelect}
          />
        </Suspense>
      </Grid>
      {/* Tokens list */}
      <TokensList className={classes.list}>
        {/* TODO: remove the mock */}
        {CollectionsMock.TokensMock.tokens.map(({ token }) => (
          <Grid item xs key={token.tokenId}>
            <Card
              media={{ src: token.image, type: 'img' }}
              title={token.name}
              content={
                /* eslint-disable react/jsx-wrap-multilines */
                <>
                  <Typography variant="body2" className={classes.desc}>
                    {/* eslint-disable-next-line */}
                    Last Sale: {token.lastSell.value} ETH
                  </Typography>
                  {token.lastSell.timestamp && (
                    <Typography variant="body2" className={classes.desc}>
                      {token.lastSell.timestamp}
                    </Typography>
                  )}
                </>
              }
              actions={
                <Button size="small" variant="outlined">
                  Add
                </Button>
              }
            />
          </Grid>
        ))}
      </TokensList>
    </Grid>
  );
};

export default CollectionSelect;
