import { createVuePlugin } from 'vite-plugin-vue2'
import federation from "@originjs/vite-plugin-federation";

export default {
    plugins: [createVuePlugin(), federation({
        name: 'remoteApp',
        filename: 'remoteEntry.js',
        // Modules to expose
        exposes: {
            './Button': './src/components/Button.vue',
        },
        shared: {
            vue: {
                singleton: true,
                requiredVersion: '2.x',
            }
        }
    })],
    server: {
        port: 3001
    },
    base: 'http://localhost:3001', // 设置基础路径
    build: {
        target: 'es2022',
    },
    preview: {
        port: 3001
    }
}
