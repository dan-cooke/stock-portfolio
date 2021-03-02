import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { subWeeks } from 'date-fns'
import { createChart } from 'lightweight-charts'
import getChartData from '../../util/getChartData'

export const fetchChartData = createAsyncThunk(
	'chartData/fetchBySymbolStatus',
	async (symbol, { getState }) => {
		const {
			Chart: { from, to, resolution },
		} = getState()

		return getChartData(symbol, { resolution, from, to })
	}
)
export const ChartSlice = createSlice({
	name: 'ChartSlice',
	initialState: {
		chartData: [],
		chart: undefined,
		resolution: 'D',
		from: subWeeks(Date.now(), 4).getTime(),
		to: Date.now(),
		loading: true,
	},
	extraReducers: {
		[fetchChartData.pending]: (state) => {
			state.loading = true
		},
		[fetchChartData.fulfilled]: (state, action) => {
			state.chartData = action.payload
			state.loading = false
		},
	},
})

export default ChartSlice.reducer
