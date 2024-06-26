const path = require("path");


module.exports = {
  entry: {
    home: "./src/js/home/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public", "js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
