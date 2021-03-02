import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getStockSummary } from '../../util/getStocksSummary'

export const fetchStockData = createAsyncThunk(
	'stockData/fetchBySymbolAndRegionStatus',
	async (stock) => {
		return getStockSummary(stock)
	}
)

export const StockTableSlice = createSlice({
	name: 'StockTable',
	initialState: {
		positionData: [
			{
				symbol: 'ONDS',
				costBasis: 13.27,
				numberOfShares: 40,
			},
			{
				symbol: 'CURI',
				costBasis: 19.1,
				numberOfShares: 28,
			},
			{
				symbol: 'PLTR',
				costBasis: 25.51,
				numberOfShares: 20,
			},
			{
				symbol: 'SKLZ',
				costBasis: 35.63,
				numberOfShares: 15,
			},
		],
		stockData: [],
		selectedStock: undefined,
	},
	reducers: {
		stockSelected: (state, action) => {
			state.selectedStock = action.payload
		},
	},
	extraReducers: {
		[fetchStockData.fulfilled]: (state, action) => {
			state.stockData = [...state.stockData, action.payload]
		},
	},
})

export const { stockSelected } = StockTableSlice.actions

export default StockTableSlice.reducer
