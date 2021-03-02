import React, { useEffect, useLayoutEffect, useRef } from 'react'
import './Chart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChartData, initChart } from './Chart.slice'
import { createChart } from 'lightweight-charts'

let candleSeries;
const Chart = () => {
	const { selectedStock } = useSelector((state) => state.StockTable)
	const { chartData } = useSelector((state) => state.Chart)
	const dispatch = useDispatch()
	const chartContainerRef = useRef()

	useLayoutEffect(() => {
		const width = chartContainerRef.current.clientWidth
		const height = chartContainerRef.current.clientHeight
		const chart = createChart(chartContainerRef.current, { width, height })
		candleSeries = chart.addCandlestickSeries()
	}, [])

	useEffect(() => {
		if (selectedStock) {
			dispatch(fetchChartData(selectedStock.symbol))
		}
	}, [selectedStock])

	return <div className='chart__container' ref={chartContainerRef}></div>
}

Chart.defaultProps = {
	data: [],
}

export default Chart
