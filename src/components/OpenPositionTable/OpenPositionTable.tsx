import { Position } from '@/resolver-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import * as React from 'react';
import useSelectedPosition from './useSelectedPosition';

type OpenPositionTableProps = {
  openPositions: Position[];
};

const OpenPositionTable: React.FC<OpenPositionTableProps> = ({
  openPositions,
}) => {
  const { selectedPosition, toggleSelectedPosition } = useSelectedPosition();
  return (
    <Table component={Paper}>
      <Table size="small">
        <TableHead>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableHead>
        <TableBody>
          {openPositions.map((position) => {
            return (
              <TableRow
                key={position.symbol}
                selected={selectedPosition()?.symbol === position.symbol}
                onClick={() => {
                  toggleSelectedPosition(position);
                }}
              >
                <TableCell>{position.symbol}</TableCell>
                <TableCell>{position.numberOfShares}</TableCell>
                <TableCell>{position.averagePrice}</TableCell>
                <TableCell>{position.currentPrice}</TableCell>
                <TableCell>{position.profitLossPercent}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Table>
  );
};

export default OpenPositionTable;
