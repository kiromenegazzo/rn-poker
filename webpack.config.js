const path = require('path'); // eslint-disable-line

module.exports = {
  resolve: {
    alias: {
      core: path.resolve('src', 'core'),
      components: path.resolve('src', 'components'),
      constants: path.resolve('src', 'constants'),
    },
    modules: ['node_modules'],
    symlinks: false,
    extensions: ['.jsx', '.mjs', '.js', '.json', '.svg'],
  },
};
