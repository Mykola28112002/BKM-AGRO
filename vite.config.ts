import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, './src/components/') },
      { find: '@modules', replacement: path.resolve(__dirname, './src/modules/') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles/') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets/') },
      { find: '@ui', replacement: path.resolve(__dirname, './src/UI-core/') },
    ],
  },
});
