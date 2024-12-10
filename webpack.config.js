const path = require('path');

module.exports = {
  module: {
    rules: [{ test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i, use: 'file-loader'}],
  },
};