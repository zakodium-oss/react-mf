import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import noBundlePlugin from 'vite-plugin-no-bundle';

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'custom',
  build: {
    target: 'modules',
    outDir: './lib',
    lib: {
      entry: './src/index.js',
      formats: ['cjs', 'es'],
    },
  },
  plugins: [
    noBundlePlugin({
      fileNames: '[name].[format].js',
    }),
    react(),
  ],
});
