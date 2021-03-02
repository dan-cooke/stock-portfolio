const getChartData = async (symbol, { resolution, from, to }) => {
	const res = await fetch(
		`https://finhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}` +
			`&from=${from}` +
			`&to=${to}` +
			`&token=${process.env.GATSBY_FINHUB_API_KEY}`
	)

	if (!res.ok) {
		return Promise.reject('Error fetching chart data')
	}

	return res.json()
}

export default getChartData
