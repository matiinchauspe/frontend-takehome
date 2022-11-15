/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, Suspense } from 'react';

import { useCollections, useTokens, useCustomCollection } from '@hooks';
import { Grid, Text, Button, Skeleton, Select, List as TokensList, Card } from '@components/shared';

import useStyles from './styles';

const CollectionSelect = () => {
  const { addTokenToCollection, collectionInEdition, collectionSelected, setCollectionSelected } =
    useCustomCollection();
  // #Fetch
  const { data: collections } = useCollections();
  const { data: tokens, isLoading } = useTokens(collectionSelected);
  // #--
  const handleSelect = useCallback((val) => {
    setCollectionSelected(val);
  }, []);

  const handleAddToken = (token) => () => {
    addTokenToCollection(token);
  };

  const { classes } = useStyles();

  return (
    <Grid container item sm={4} cx={{ padding: '10px' }} className={classes.container}>
      {/* Select the collection */}
      <Grid item xs={12}>
        <Suspense fallback={<Skeleton variant="rounded" width="100%" height={60} />}>
          <Select
            items={collections?.collections}
            selectedValue={collectionSelected}
            onChange={handleSelect}
          />
        </Suspense>
      </Grid>
      {/* Tokens list */}
      <TokensList
        hasData={Boolean(tokens?.tokens.length)}
        noDataMessage="Select a collection"
        centered
        cols={11}
        isLoading={isLoading}
        className={classes.list}
      >
        {tokens?.tokens.map((token) => {
          const alreadyExist = collectionInEdition.tokens.some((t) => t.id === token.id);

          return (
            <Card
              key={token.id}
              fixedWidth={false}
              media={{ src: token.image, type: 'img' }}
              title={token.name}
              content={
                <>
                  <Text className={classes.desc} component="div">
                    Last Sale: {token.lastSale.value} {token.lastSale.chain}
                  </Text>
                  {token.lastSale.date && (
                    <Text className={classes.desc} component="div">
                      Date: {token.lastSale.date}
                    </Text>
                  )}
                </>
              }
              actions={
                <Button
                  size="small"
                  variant="contained"
                  disabled={alreadyExist}
                  className={classes.button}
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
