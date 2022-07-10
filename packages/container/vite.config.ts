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
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('zero-'),
        },
      },
    }),
    federation({
      name: 'container',
      filename: 'remoteEntry.js',
      exposes: {},
      remotes: {
        library: '/assets/remoteEntry.js',
      },
      shared: getShare(),
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    proxy: {
      '/assets': {
        target: 'http://localhost:5005',
        changeOrigin: true,
      },
    },
  },
});
