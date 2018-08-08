# only-web-loader
Webpack loader to ignore certain package on build when the target is not web.

Created for fix this issue https://github.com/webpack-contrib/mini-css-extract-plugin/issues/73

## Install

```
$ npm install --save-dev only-web-loader
```

## Usage (Ignoring all `.css` when the target is not `web`)

- In `webpack.config.js`

```js
module.exports = {
  // other configurations
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        use: [
          'only-web-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          //...
        ]
      }
    ]
  }
};
```
