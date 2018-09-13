'use strict';

const fs = require('fs');
const path = require('path');

const examples = fs.readdirSync(path.join(__dirname, 'examples'));
const entry = {};
for (const example of examples) {
  const key = `./examples/${example}/bundle`;
  const value = `./examples/${example}/app`;
  entry[key] = value;
}

module.exports = {
  entry: entry,
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  serve: {
    hotClient: true,
    open: {
      app: 'example',
      path: '/examples/example'
    }
  }
};
