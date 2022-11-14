import { useCustomCollection } from '@hooks';

import { Grid, Button, Text, List as TokensList, Card } from '@components/shared';
import { Header } from './header';

import useStyles from './styles';

const CollectionBuild = () => {
  const { collectionInEdition, removeTokenFromCollection } = useCustomCollection();
  const { classes } = useStyles();

  const handleRemoveToken = (tokenId) => () => {
    removeTokenFromCollection(tokenId);
  };

  return (
    <Grid item container sm={7} xs={12} className={classes.container}>
      {/* Header */}
      <Header />
      {/* Tokens List */}
      <TokensList className={classes.list} hasData={Boolean(collectionInEdition.tokens.length)}>
        {collectionInEdition.tokens.map((token) => (
          <Card
            key={token.id}
            media={{ src: token.image, type: 'img' }}
            title={token.name}
            content={
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
                className={classes.button}
                onClick={handleRemoveToken(token.id)}
              >
                Remove
              </Button>
            }
          />
        ))}
      </TokensList>
    </Grid>
  );
};

export default CollectionBuild;
