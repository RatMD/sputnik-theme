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

    function env(key: string, defaultValue: unknown = null) {
        if (key in process.env) {
            return process.env[key];
        } else {
            return defaultValue;
        }
    }

    const base = __dirname;
    const theme = path.basename(__dirname);

    return {
        base: `/themes/${theme}/assets/`,
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
            host: env('VITE_HOST', '0.0.0.0'),
            hmr: {
                host: env('VITE_HOST', '0.0.0.0'),
            },
            allowedHosts: env('VITE_HOST', null) ? [ env('VITE_HOST') ] : [],
            https: env('VITE_HTTPS', false) ? {
                key: fs.readFileSync(env('VITE_HTTPS_KEY')),
                cert: fs.readFileSync(env('VITE_HTTPS_CERT')),
            }: void 0
        }
    };
});
