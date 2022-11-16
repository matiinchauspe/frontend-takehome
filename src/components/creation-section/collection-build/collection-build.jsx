import { useDrop } from 'react-dnd';

import { useCustomCollection } from '@hooks';
import { ItemTypes } from '@constants';

import { Grid, Button, Text, List as TokensList, Card } from '@components/shared';
import { Header } from './header';

import useStyles from './styles';

const CollectionBuild = () => {
  const { collectionInEdition, removeTokenFromCollection, addTokenToCollection } =
    useCustomCollection();
  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => addTokenToCollection(item.id),
    collect: (monitor) => ({
      isOver: Boolean(monitor.isOver()),
    }),
  });
  const { classes } = useStyles({ isOverList: isOver });

  const handleRemoveToken = (tokenId) => () => {
    removeTokenFromCollection(tokenId);
  };

  return (
    <Grid item container sm className={classes.container}>
      {/* Header */}
      <Header />
      {/* Tokens List */}
      <TokensList
        className={classes.list}
        hasData={Boolean(collectionInEdition.tokens.length)}
        ref={dropRef}
      >
        {collectionInEdition.tokens.map((token) => (
          <Card
            id={token.id}
            key={`token_${token.id}`}
            media={{ src: token.image, type: 'img' }}
            title={token.name}
            content={
              <>
                <Text variant="body2" className={classes.desc}>
                  Last Sale: {token.lastSale.value} {token.lastSale.chain}
                </Text>
                {token.lastSale.date && (
                  <Text variant="body2" className={classes.desc}>
                    Date: {token.lastSale.date}
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
