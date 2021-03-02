module.exports = {
	siteMetadata: {
		title: 'Stock Tracker',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
	],
}
