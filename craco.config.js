const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (dir) => path.resolve(__dirname, dir);
console.log(process.env.NODE_ENV);
module.exports = {
  webpack: {
    publicPath: process.env.NODE_ENV === "development" ? "/" : "/react-music",
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
