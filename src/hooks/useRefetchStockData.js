import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStockData } from '../components/StockTable/StockTable.slice'

const useRefetchStockData = () => {
	const dispatch = useDispatch()
	const { positionData } = useSelector((state) => state.StockTable)
	const refetch = useCallback(() => {
		positionData.forEach((position) => {
			dispatch(fetchStockData(position))
		})
	}, [positionData])

	useEffect(() => {
		refetch()
	}, [])

	return {
		refetch,
	}
}

export default useRefetchStockData
