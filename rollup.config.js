import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const production = !process.env.ROLLUP_WATCH

export default {
  plugins: [
    resolve(),
    commonjs(),
    production && uglify()
  ],
  output: {
    format: 'umd',
    sourcemap: !production
  }
}