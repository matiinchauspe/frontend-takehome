import { TokensMock } from '@services/tokens/tokens.mock';
import { TokensDataAdapter } from '@services/tokens/tokens.transform';

import { Grid, Button, Text, List as TokensList, Card } from '@components/shared';
import { Header } from './header';

import useStyles from './styles';

// TODO: remove this later
const tokensMock = TokensDataAdapter(TokensMock);

const CollectionBuild = () => {
  const { classes } = useStyles();

  return (
    <Grid item container sm={7} xs={12} className={classes.container}>
      {/* Header */}
      <Header />
      {/* Tokens List */}
      <TokensList className={classes.list}>
        {tokensMock.tokens.map((token) => (
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

export default CollectionBuild;
