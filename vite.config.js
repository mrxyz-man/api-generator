import { resolve } from 'path';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vue from '@vitejs/plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'VueGeneratorApi',
      fileName: 'vue-generator-api',
    },
    copyPublicDir: false,
  },
  plugins: [
    vue(),
    nodePolyfills(),
  ],
});
