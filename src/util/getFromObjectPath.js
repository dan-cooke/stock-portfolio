const getFromObjectPath = (obj, pathString) => {
	if (typeof obj !== 'object') return obj
	if (!pathString) return null

	const splitPath = pathString.split('.')
	const nextProperty = splitPath[0]
	const remainingPath = splitPath.slice(1)
	return getFromObjectPath(obj[nextProperty], remainingPath.join('.'))
}

export default getFromObjectPath
