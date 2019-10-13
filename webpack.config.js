// lenh webpack =>webpack -w 'de theo doi thay doi khi code'
const path = require('path');

module.exports = {
  mode: 'development',     // set mode option, 'development' or 'production'
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,'public'),
    filename: "bundle.js"
  }
};