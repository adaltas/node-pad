
const babel = require('rollup-plugin-babel');
const pkg = require('./package');

export default [{
  input: 'lib/index.js',
  output: [
    {
      file: `dist/${pkg.name}.umd.js`,
      name: 'mixme',
      format: 'umd'
    },
    {
      file: `dist/${pkg.name}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `dist/${pkg.name}.esm.js`,
      format: 'esm'
    }
  ],
  plugins: [
    babel(),
  ]
},{
  input: 'lib/colors.js',
  output: [
    {
      file: `dist/colors.umd.js`,
      name: 'mixme',
      format: 'umd'
    },
    {
      file: `dist/colors.cjs.js`,
      format: 'cjs'
    },
    {
      file: `dist/colors.esm.js`,
      format: 'esm'
    }
  ],
  plugins: [
    babel(),
  ]
}];
