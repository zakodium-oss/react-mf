const config = {
  presets: ['@babel/preset-react'],
  plugins: [],
};

if (process.env.BABEL_ENV !== 'es6') {
  config.plugins.push('@babel/plugin-transform-modules-commonjs');
}

module.exports = config;
