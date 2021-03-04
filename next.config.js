module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.document.gql$/,
      exclude: /node_modules/,
      use: [defaultLoaders.babel, 'graphql-let/loader'],
    });
    config.module.rules.push({
      test: /\.types.gql$/,
      exclude: /node_modules/,
      use: ['graphql-let/schema/loader'],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json', // Required by Webpack v4
      use: 'yaml-loader',
    });

    return config;
  },
};
