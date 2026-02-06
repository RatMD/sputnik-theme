import fs from 'node:fs';
import path from 'node:path';
import tailwindcss from "@tailwindcss/vite";
import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';
import laravel from 'laravel-vite-plugin';
import i18n from 'laravel-vue-i18n/vite';
import { defineConfig } from 'vite';

const base = __dirname;
const theme = path.basename(__dirname);

// https://vitejs.dev/config/
export default defineConfig(() => {
    const envPath = path.resolve(__dirname, '.env')
    if (fs.existsSync(envPath)) {
        console.log(envPath);
        dotenv.config({ path: envPath })
    }

    return {
        base: `/`,
        publicDir: path.resolve(__dirname, 'resources/assets'),

        plugins: [
            laravel({
                input: [
                    'resources/theme.ts'
                ],
                hotFile: path.join(base, 'assets', '.hot'),
                refresh: {
                    paths: [
                        './**/*',
                        '../../plugins/ratmd/laika/resources/**/*'
                    ]
                },
            }),
            tailwindcss(),
            vue(),
            i18n(),
        ],
        build: {
            manifest: true,
            outDir: './assets/',
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
            host: process.env.VITE_HOST ?? '0.0.0.0',
            hmr: {
                host: process.env.VITE_HOST ?? '0.0.0.0',
            },
            allowedHosts: process.env.VITE_HOST ? [ process.env.VITE_HOST ] : []
        }
    };
});
