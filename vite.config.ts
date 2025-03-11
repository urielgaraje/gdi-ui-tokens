import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
    plugins: [libInjectCss()],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'TokensCSS',
            fileName: 'tokens',
            formats: ['es']
        },
        rollupOptions: {
            output: {
                // Put chunk files at <output>/chunks
                chunkFileNames: 'chunks/[name].[hash].js',
                // Put chunk styles at <output>/assets
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js'
            }
        }
    }
});
