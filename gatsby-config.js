module.exports = {
  siteMetadata: {
    title: "Stock Tracker",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
