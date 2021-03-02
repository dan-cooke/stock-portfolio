import React, { useEffect } from 'react'

import {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
} from '@material-ui/core'
import tableColumns from '../../tableColumns'
import getFromObjectPath from '../../util/getFromObjectPath'
import { useDispatch, useSelector } from 'react-redux'
import { stockSelected } from './StockTable.slice'

const StockTable = () => {
	const { stockData, positionData, selectedStock } = useSelector(
		(state) => state.StockTable
	)

	const dispatch = useDispatch()

	const renderCell = (stock, column) => {
		const valueFromKey = getFromObjectPath(stock, column.key)
		const valueFromRender = column.render && column.render(stock)
		if (valueFromRender) {
			return valueFromRender
		}
		return valueFromKey
	}

	const handleRowClick = (stock) => {
		dispatch(stockSelected(stock))
	}

	return (
		<TableContainer component={Paper}>
			<Table aria-label='simple table' size='small'>
				<TableHead>
					<TableRow>
						{tableColumns.map((column) => (
							<TableCell key={`${column.name}-header`}>{column.name}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{positionData.map((position, index) => (
						<TableRow
							key={position.symbol}
							selected={selectedStock?.symbol === position?.symbol}
							onClick={() => handleRowClick(position)}
						>
							{tableColumns.map((column) => (
								<TableCell key={`${position.symbol}-${column.name}`}>
									{renderCell(stockData[index] || position, column)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
export default StockTable
