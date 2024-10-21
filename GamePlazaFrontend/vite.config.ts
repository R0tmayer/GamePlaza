import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import {defineConfig} from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools'

import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, './src/components/pages'),
            '@custom': path.resolve(__dirname, './src/components/custom'),
            '@shadcn': path.resolve(__dirname, './src/components/ui'),
            '@fakes': path.resolve(__dirname, './src/fakes'),
            '@images': path.resolve(__dirname, './src/assets/images'),
            '@interfaces': path.resolve(__dirname, './src/interfaces'),
            '@': path.resolve(__dirname, './src'),
        },
    },
});
