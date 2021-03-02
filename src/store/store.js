import { configureStore } from '@reduxjs/toolkit'
import { ChartSlice } from '../components/Chart/Chart.slice'
import { StockTableSlice } from '../components/StockTable/StockTable.slice'

const store = configureStore({
	reducer: {
		StockTable: StockTableSlice.reducer,
		Chart: ChartSlice.reducer,
	},
})

export default store
