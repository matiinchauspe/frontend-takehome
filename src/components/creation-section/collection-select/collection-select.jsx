/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useEffect, useCallback, useTransition, Suspense } from 'react';

import { useCollections, useTokens, useCustomCollection } from '@hooks';
import { Grid, Text, Button, Skeleton, Select, List as TokensList, Card } from '@components/shared';

import useStyles from './styles';

const CollectionSelect = () => {
  const [isPending, startTransition] = useTransition();
  const { addTokenToCollection, collectionInEdition, collectionSelected, setCollectionSelected } =
    useCustomCollection();
  // #Fetch
  const { data: collections } = useCollections();
  const { data: tokens } = useTokens(collectionSelected);
  // #--

  // TODO: remove this later
  // console.log({ collections: collectionsList });
  console.log({ collections });
  console.log({ tokens });

  // const memoizedCollections = useMemo(() => collections, []);

  const handleSelect = useCallback((val) => {
    setCollectionSelected(val);
  }, []);

  const handleAddToken = (token) => () => {
    addTokenToCollection(token);
  };

  // useEffect(() => {
  //   startTransition(() => {
  //     setCollectionsList(memoizedCollections);
  //   });
  // }, [memoizedCollections]);

  const { classes } = useStyles();

  return (
    <Grid container item sm={5} className={classes.container}>
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
