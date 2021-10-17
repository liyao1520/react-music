const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#c70c0c" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
