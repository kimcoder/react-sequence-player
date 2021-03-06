import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'esm'
    },
  ],
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    babel({ runtimeHelpers: true, exclude: 'node_modules/**' }),
    typescript({
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        include: [ 'src/**/*' ],
        exclude: [ 'node_modules', 'example' ]
      }
    })
  ],
};

export default config;