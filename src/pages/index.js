import React from 'react'
import Chart from '../components/Chart/Chart'
import StockTable from '../components/StockTable/StockTable'
import useRefetchStockData from '../hooks/useRefetchStockData'

const IndexPage = () => {
	const { refetch } = useRefetchStockData()

	return (
		<div className='app__container'>
			<Chart />
			<StockTable />
		</div>
	)
}
export default IndexPage
