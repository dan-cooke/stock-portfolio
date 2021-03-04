import * as React from 'react';
import { Position } from '@/resolver-types';
import { makeVar } from '@apollo/client';

export const selectedPosition = makeVar<Position | undefined>(undefined);
const useSelectedPosition = () => {
  const toggleSelectedPosition = React.useCallback((position: Position) => {
    if (position.symbol !== selectedPosition()?.symbol) {
      selectedPosition(position);
    }
    return selectedPosition(undefined);
  }, []);

  return {
    toggleSelectedPosition,
    selectedPosition,
  };
};

export default useSelectedPosition;
