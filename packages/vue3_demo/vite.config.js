import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), federation({
    name: 'host-app',
    remotes: {
      remoteApp: "http://localhost:3001/assets/remoteEntry.js",
    },
    shared: {
      vue: {
        singleton: true,
        requiredVersion: '2.x',
      }
    }
  })],

  server: {
    port: 3000,
  },
  build: {
    target: 'es2022'
  }
})
