/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from 'react';

import { useCollections, useTokens, useCustomCollection } from '@hooks';
import { Grid, Text, Button, Select, List as TokensList, Card } from '@components/shared';

import useStyles from './styles';

const CollectionSelect = () => {
  const {
    addTokenToCollection,
    collectionSelected,
    collectionInEdition,
    setCollectionSelected,
    setCurrentTokensList,
    currentTokensList,
  } = useCustomCollection();
  // #Fetch
  const { data: collections } = useCollections();
  const { data: tokens, isLoading } = useTokens(collectionSelected);

  const handleSelect = useCallback((val) => {
    setCollectionSelected(val);
  }, []);

  const handleAddToken = (tokenId) => () => {
    addTokenToCollection(tokenId);
  };

  useEffect(() => {
    if (tokens) {
      setCurrentTokensList(tokens);
    }
  }, [tokens, currentTokensList]);

  const { classes } = useStyles();

  return (
    <Grid container item sm={4} className={classes.container}>
      {/* Select the collection */}
      <Grid item xs={12}>
        <Select items={collections} selectedValue={collectionSelected} onChange={handleSelect} />
      </Grid>
      {/* Tokens list */}
      <TokensList
        hasData={Boolean(tokens?.length)}
        noDataMessage="Select a collection"
        centered
        isLoading={isLoading}
        cols={11}
        className={classes.list}
      >
        {tokens?.map((token) => {
          const added = collectionInEdition.tokens.some((t) => t.id === token.id);

          return (
            <Card
              id={token.id}
              key={`token_${token.id}`}
              fixedWidth={false}
              media={{ src: token.image, type: 'img' }}
              title={token.name}
              isDraggable={!added}
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
                  disabled={added}
                  className={classes.button}
                  onClick={handleAddToken(token.id)}
                >
                  {added ? 'Added' : 'Add'}
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
