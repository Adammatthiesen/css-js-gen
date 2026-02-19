import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: ['./src/index.ts'],
    format: 'esm',
    dts: true,
    publint: {
        level: 'error', // 'warning' | 'error' | 'suggestion'
    },
    outExtensions: () => ({
        js: `.js`,
        dts: `.d.ts`,
    })
})