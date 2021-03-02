class GetStockSummaryError extends Error {
	constructor(symbol) {
		super('')
		this.name = 'GetStockSummaryError'
		this.message = `${symbol} - error retrieving summary`
	}
}

export const getStockSummary = async (stock) => {
	const res = await fetch(
		`${process.env.GATSBY_YAHOO_FINANCE_API_URL}/stock/v2/get-summary?symbol=${
			stock.symbol
		}&region=${stock.region || 'US'}`,
		{
			headers: {
				'x-rapidapi-key': process.env.GATSBY_YAHOO_FINANCE_API_KEY,
			},
		}
	)
	if (!res.ok) {
		return {
			...stock,
			error: new GetStockSummaryError(stock.symbol),
		}
	}
	return {
		...stock,
		...(await res.json()),
	}
}
const getBulkStockSummary = async (stocks) => {
	return Promise.all(stocks.map(getStockSummary))
}

export default getBulkStockSummary
