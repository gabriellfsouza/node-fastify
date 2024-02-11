import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tsup',
  target: 'es2020',
  sourcemap: true,
  outDir: 'build',
})
