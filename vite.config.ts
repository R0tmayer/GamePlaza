import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import {defineConfig} from 'vite';

import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, './src/components/pages'),
            '@custom': path.resolve(__dirname, './src/components/custom'),
            '@shadcn': path.resolve(__dirname, './src/components/ui'),
            '@mocks': path.resolve(__dirname, './src/mocks'),
            '@': path.resolve(__dirname, './src'),
        },
    },
});
