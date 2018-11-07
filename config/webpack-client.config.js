const root = require('app-root-path').path;

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: `${root}/dist`
  },
  watchOptions: {
    ignored: ['server/**/*.ts', 'node_modules']
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [{
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
        }
      ]
    }]
  }
};