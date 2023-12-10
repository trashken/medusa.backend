const { withCustomWebpackConfig } = require("@medusajs/admin-ui");

module.exports = withCustomWebpackConfig((config, webpack) => {
  return {
    ...config,
    devServer: {
      ...config.devServer,
      disableHostCheck: true,
      allowedHosts: [
          'medusa.trashken.com',          
          'api.trashken.com',
          'trashken.com',
      ],
  },
  };
});