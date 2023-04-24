export default {
  stories: ['../stories/**/*.stories.jsx'],
  addons: ['@storybook/addon-storysource', '@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  }
};