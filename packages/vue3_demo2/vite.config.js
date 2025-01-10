import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), , federation({
    name: 'remote-app',
    filename: 'remoteEntry.js',
    // Modules to expose
    exposes: {
      './Button': './src/components/Button.vue',
    },
    shared: ['vue']
  })],
  base: "http://localhost:3003",
  server: {
    port: 3002,
  },
  preview: {
    port: 3003
  },
  build: {
    target: 'es2022'
  }
})
