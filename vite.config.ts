import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./{lib,src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['lib/react-bar-graphs.tsx'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/lib', ''),
        content,
      }),
    }),
    macrosPlugin(),
  ],
  build: {
    lib: {
      entry: resolve('lib', 'react-bar-graphs.tsx'),
      name: 'ReactBarGraphs',
      fileName: (format) => `react-bar-graphs.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
    },
  },
}))
