import getFromObjectPath from './util/getFromObjectPath'

const roundTo2DecimalPlaces = (key, isPercent) => ({
	render: (stockData) => {
		const rawValue = getFromObjectPath(stockData, key)
		if (!rawValue) return null
		const roundedValue = rawValue.toFixed(2)
		return `${roundedValue}${isPercent ? '%' : ''}`
	},
})
const tableColumns = [
	{
		name: 'Symbol',
		key: 'symbol',
	},
	{
		name: 'No. Shares',
		key: 'numberOfShares',
	},
	{
		name: 'Cost Basis ($)',
		...roundTo2DecimalPlaces('costBasis'),
	},
	{
		name: 'Price ($)',
		...roundTo2DecimalPlaces('price.regularMarketPrice.raw'),
	},
	{
		name: 'P/L %',
		render: (stockData) => {
			if (!stockData.financialData) return null
			const {
				costBasis,
				financialData: {
					currentPrice: { raw: current },
				},
			} = stockData
			const percentageDifference = ((current - costBasis) / costBasis) * 100
			return `${percentageDifference.toFixed(2)}%`
		},
	},
]

export default tableColumns
