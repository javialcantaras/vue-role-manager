import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'

const INPUT_FILE = './src/index.ts'
const EXPORT_FOLDER = '.dist'
const EXPORT_FILE_NAME = 'vue-role'

const COMMON_CONFIG = {
  input: INPUT_FILE,
  output: {
    format: 'esm',
    file: `${ EXPORT_FOLDER }/${ EXPORT_FILE_NAME }.js`
  },
  external: ['vue'],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
    vue(),
  ]
}

const PRODUCTION_CONFIG = {
  ...COMMON_CONFIG,
  output: {
    ...COMMON_CONFIG.output,
    file: `${ EXPORT_FOLDER }/${ EXPORT_FILE_NAME }.min.js`
  },
  plugins: [
    ...COMMON_CONFIG.plugins,
    terser()
  ]
}

export default [
  COMMON_CONFIG,
  PRODUCTION_CONFIG
]