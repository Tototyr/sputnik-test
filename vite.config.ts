import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@UI': path.resolve(__dirname, 'src/UI'),
      '@components': path.resolve(__dirname, 'src/UI/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@shared-types': path.resolve(__dirname, 'src/types'),
      '@pages': path.resolve(__dirname, 'src/UI/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@i18next': path.resolve(__dirname, 'src/i18next'),
    },
  },
});
