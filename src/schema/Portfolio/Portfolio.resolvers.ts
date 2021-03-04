import { Resolvers } from '../../../resolver-types';

export const portfolioResolvers: Resolvers = {
  Query: {
    portfolio: () => {
      return {
        cash: 100000,
        openPositions: [
          {
            symbol: `AAPL`,
            averagePrice: 200,
            costBasis: 4000,
            numberOfShares: 20,
            changePercent: 99,
            changeUSD: 300,
            currentPrice: 300,
            dailyProfitLossUSD: 1000,
            exposure: 2,
            profitLossPercent: 30,
            profitLossUSD: 3000,
          },
        ],
      };
    },
  },
};
