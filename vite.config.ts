import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    solidPlugin(),
    Icons({
      compiler: 'solid',
      // autoInstall: true,
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
