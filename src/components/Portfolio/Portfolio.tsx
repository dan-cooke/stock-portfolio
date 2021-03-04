import * as React from 'react';
import OpenPositionTable from '../OpenPositionTable/OpenPositionTable';
import { usePortfolioQuery } from './Portfolio.document.gql';

const Portfolio: React.FC = () => {
  const { data } = usePortfolioQuery();

  const portfolio = data?.portfolio;
  return <OpenPositionTable openPositions={portfolio?.openPositions || []} />;
};

export default Portfolio;
