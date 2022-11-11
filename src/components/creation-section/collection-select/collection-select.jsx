import { useState, useCallback, Suspense } from 'react';

import { useCollections, useTokens } from '@hooks';
import { Grid, Text, Button, Skeleton, Select, List as TokensList, Card } from '@components/shared';

import useStyles from './styles';

const CollectionSelect = () => {
  const [collectionSelected, setCollectionSelected] = useState('');
  const { data: collections } = useCollections();
  const { data: tokens, isLoading } = useTokens(collectionSelected);

  // TODO: remove this later
  console.log({ collections });
  console.log({ tokens });

  const { classes } = useStyles();

  const handleSelect = useCallback((val) => {
    setCollectionSelected(val);
  }, []);

  return (
    <Grid container item sm={5} className={classes.container}>
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
        {tokens?.tokens.map((token) => (
          <Grid item xs key={token.id}>
            <Card
              media={{ src: token.image, type: 'img' }}
              title={token.name}
              content={
                /* eslint-disable react/jsx-wrap-multilines */
                <>
                  <Text variant="body2" className={classes.desc}>
                    {/* eslint-disable-next-line */}
                    Last Sale: {token.lastSale.value} {token.lastSale.chain}
                  </Text>
                  {token.lastSale.date && (
                    <Text variant="body2" className={classes.desc}>
                      {token.lastSale.date}
                    </Text>
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
