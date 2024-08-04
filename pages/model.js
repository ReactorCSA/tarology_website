const HtmlWebpackPlugin = require("html-webpack-plugin");

const routes = [
  { path: 'index' },
  { path: 'terms' },
  { path: 'privacy' },
];

const pageList = routes.map((item) => (
  new HtmlWebpackPlugin({
    template: `./pages/routes/${item.path}.html`,
    filename: `${item.path}.html`,
  })
))

module.exports = { routes, pageList };
