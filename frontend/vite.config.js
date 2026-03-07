import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import { fileURLToPath } from 'url';
var __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 3000,
    }
});
