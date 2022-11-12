import { useState, useCallback, Suspense } from 'react';

import { useCollections, useTokens, useCustomCollection } from '@hooks';
import { Grid, Text, Button, Skeleton, Select, List as TokensList, Card } from '@components/shared';

import useStyles from './styles';

const CollectionSelect = () => {
  const [collectionSelected, setCollectionSelected] = useState('');
  // #Fetch
  const { data: collections } = useCollections();
  const { data: tokens, isLoading } = useTokens(collectionSelected);
  // #--
  const { addTokenToCollection, collectionInEdition } = useCustomCollection();

  // TODO: remove this later
  console.log({ collections });
  console.log({ tokens });

  const { classes } = useStyles();

  const handleSelect = useCallback((val) => {
    setCollectionSelected(val);
  }, []);

  const handleAddToken = (token) => () => {
    addTokenToCollection(token);
  };

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
        {tokens?.tokens.map((token) => {
          const alreadyExist = collectionInEdition.tokens.some((t) => t.id === token.id);

          return (
            <Card
              key={token.id}
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
                <Button
                  size="small"
                  variant="outlined"
                  disabled={alreadyExist}
                  onClick={handleAddToken(token)}
                >
                  {alreadyExist ? 'Added' : 'Add'}
                </Button>
              }
            />
          );
        })}
      </TokensList>
    </Grid>
  );
};

export default CollectionSelect;
