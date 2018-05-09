import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'demo/basic-app/main.js',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelrc: false,
      presets: [
        ['env', {modules: false}]
      ],
      plugins: [
        'transform-async-generator-functions',
        'external-helpers'
      ]
    }),
    uglify()
  ],
  output: {
    file: 'demo/basic-app/bundle.js',
    format: 'iife',
    sourcemap: true
  }
}
