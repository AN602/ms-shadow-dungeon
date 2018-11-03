const root = require('app-root-path').path;

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: `${root}/dist`
  },
  watchOptions: {
    ignored: ['server/**/*.ts', 'node_modules']
  }
};