'use strict';

module.exports = (storybookConfig) => {
  // To avoid having minified names in source view
  storybookConfig.optimization.minimize = false;
  storybookConfig.devtool = false;
  return storybookConfig;
};
