module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
	plugins: ['react', 'prettier'],
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				trailingComma: 'es5',
				semi: false,
				jsxSingleQuote: true,
				singleQuote: true,
				useTabs: true,
			},
		],
	},
}
