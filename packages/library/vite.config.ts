import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

const pkg = require('./package.json');

function getShare() {
  let obj = {};
  Object.keys(pkg.dependencies).forEach((key) => {
    obj[key] = {};
    if (/vue(.+)?/.test(key) || ['vue'].includes(key)) {
      obj[key].eager = true;
      obj[key].singleton = true;
    }
    obj[key].requiredVersion = false;
  });
  return obj;
}

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'library',
      filename: 'remoteEntry.js',
      exposes: {
        './module': './src/exposes.ts',
        './platform': './src/components/plateform.ts',
      },
      shared: getShare(),
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  build: {
    polyfillModulePreload: false,
    assetsInlineLimit: 40960,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
