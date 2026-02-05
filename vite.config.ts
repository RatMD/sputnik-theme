import { readFileSync } from 'node:fs';
import path from 'node:path';
import tailwindcss from "@tailwindcss/vite";
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import i18n from 'laravel-vue-i18n/vite';
import { defineConfig } from 'vite';

const base = __dirname;
const theme = path.basename(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
    base: `/themes/${theme}/assets/build/`,
    publicDir: './resources/assets',
    plugins: [
        laravel({
            input: [
                'resources/theme.ts'
            ],
            hotFile: path.join(base, 'assets', '.hot'),
            refresh: true,
        }),
        tailwindcss(),
        vue(),
        i18n(),
    ],
    build: {
        manifest: true,
        rollupOptions: {
            output: {
                manualChunks: (id) => id.includes('node_modules') ? 'vendor' : void 0
            },
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources'),
        }
    },
    server: {
        cors: true,
        host: "0.0.0.0",
        allowedHosts: [
            'laika.october.ls'
        ]
    }
});
