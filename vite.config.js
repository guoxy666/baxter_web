import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import mdx from '@mdx-js/rollup'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

// https://vitejs.dev/config/
export default defineConfig({  
  plugins: [
    vue(),
    mdx({
      jsxImportSource: 'vue',
      remarkPlugins: [
        remarkMath,
        remarkGfm,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
    }),
  ],
    base: '/baxter_web/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets' // ȷ����Դ·����ȷ
    },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
