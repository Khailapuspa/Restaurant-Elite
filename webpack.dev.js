const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "dist"),
        publicPath: "/",
      },
      {
        directory: path.join(__dirname, "public"),
        publicPath: "/",
      },
    ],
    open: true,
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
    watchFiles: {
      paths: ["src/**/*.*", "public/**/*.*"],
      options: {
        ignored: /node_modules|dist/,
      },
    },
  },
  watchOptions: {
    ignored: /node_modules|dist/,
    poll: 1000, // Check for changes every second (reduce the polling frequency)
    aggregateTimeout: 300, // Delay rebuild after the first change (reduce the frequency of rebuilds)
  },
});
