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

type OpenPositionTableProps = {
  onPositionSelected: (pos: Position) => void;
  openPositions: [Position];
};

const OpenPositionTable: React.FC<OpenPositionTableProps> = ({
  onPositionSelected,
  openPositions,
}) => {
  const [selectedPosition, setSelectedPosition] = React.useState<
    Position | undefined
  >();
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
              <TableRow selected={selectedPosition?.symbol === position.symbol}>
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
