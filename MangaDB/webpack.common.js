const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
      rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }
      ]
    },
    plugins: [
      /* HTML Webpack Plugin */
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        filename: "index.html"
    })
  ]
  }