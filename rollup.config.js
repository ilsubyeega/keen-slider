import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import banner from 'rollup-plugin-banner'

const pkg = require('./package.json')

const date = new Date()

const bannerText = `${`
keen-slider ${pkg.version}
${pkg.description}
${pkg.homepage}
Copyright 2020-${date.getFullYear()} ${pkg.author}
License: ${pkg.license}
Released on: ${date.getFullYear()}-${(date.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}
`.trim()}`

export default [
  {
    input: './src/keen-slider.js',
    output: [
      {
        format: 'esm',
        name: 'KeenSlider',
        strict: true,
        sourcemap: true,
        file: './keen-slider.esm.js',
        sourcemap: true,
      },
      {
        format: 'umd',
        name: 'KeenSlider',
        strict: true,
        sourcemap: true,
        file: './keen-slider.js',
        format: 'umd',
        sourcemap: true,
      },
    ],
    external: ['react'],
    plugins: [
      resolve(),
      babel(),
      terser({ output: { comments: false } }),
      banner(bannerText),
    ],
  },
  {
    input: './src/react.js',
    output: [
      {
        format: 'esm',
        name: 'KeenSlider',
        strict: true,
        sourcemap: true,
        file: './react.esm.js',
        sourcemap: true,
      },
      {
        format: 'umd',
        name: 'KeenSlider',
        strict: true,
        sourcemap: true,
        file: './react.js',
        format: 'umd',
        sourcemap: true,
      },
    ],
    external: ['react'],
    plugins: [
      resolve(),
      babel(),
      terser({ output: { comments: false } }),
      banner(bannerText),
    ],
  },
]
