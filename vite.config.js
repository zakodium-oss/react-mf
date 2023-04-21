import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import noBundlePlugin from 'vite-plugin-no-bundle';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const format = process.env.VITE_BUID_CJS ? 'cjs' : 'es';
  const extension = process.env.VITE_BUID_CJS ? 'cjs' : 'mjs';

  return {
    appType: 'custom',
    build: {
      target: 'modules',
      outDir: './lib',
      emptyOutDir: !process.env.VITE_BUID_CJS,
      lib: {
        entry: './src/index.js',
        formats: [format],
      },
    },
    plugins: [
      noBundlePlugin({
        fileNames: `[name].${extension}`,
      }),
      react(),
    ],
  };
});
