import { Portfolio as PortfolioType } from '@/resolver-types';
import * as React from 'react';
import OpenPositionTable from '../OpenPositionTable/OpenPositionTable';
import { usePortfolioQuery } from './Portfolio.document.gql';

const Portfolio: React.FC = () => {
  const { data } = usePortfolioQuery();

  const portfolio = data?.portfolio as PortfolioType;
  return <OpenPositionTable openPositions={portfolio?.openPositions || []} />;
};

export default Portfolio;
