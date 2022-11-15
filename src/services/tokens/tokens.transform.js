import { dateFromTimestamp } from '@utils';

const TokenTransForm = ({ token, market }) => ({
  id: token.tokenId,
  name: token.name ?? 'Unknown',
  image: token.image,
  lastSale: {
    value: token.lastSell?.value ?? ' -- ',
    date: token.lastSell?.timestamp ? dateFromTimestamp(token.lastSell.timestamp) : ' -- ',
    chain: market.floorAsk?.price?.currency.symbol ?? null,
  },
});

const TokensDataAdapter = (data) => ({
  tokens: data?.tokens.map(TokenTransForm) ?? null,
  continuation: data?.continuation ?? null,
});

export { TokensDataAdapter };
