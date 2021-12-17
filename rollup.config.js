//import pluginAddMissingDeps from './plugin-add-missing-deps';

// CONTENT TYPES
import pluginMp3 from './plugins/plugin-mp3'; // mp3
//import pluginVisual from './plugin-visual'; // svg, png, jpg
import pluginImage from '@rollup/plugin-image';
//import pluginJson from './plugin-json'; // json
import pluginJson from '@rollup/plugin-json';

import pluginReplace from '@rollup/plugin-replace';
import pluginStrip from '@rollup/plugin-strip';
import pluginCleanup from 'rollup-plugin-cleanup';


const input = 'src/main.js';

const outputSystem = {
  dir: 'dist/system',
  format: 'systemjs',
  sourcemap: true // true, 'inline
};
const outputEs = {
  dir: 'dist/es',
  format: 'es',
  sourcemap: true
};

const debug = true;
const superProd = !debug && false; // strips logs and comments

const plugins = [
  pluginReplace({ include: '**/*.js', preventAssignment: true, _DEBUG: debug, _SUPERPROD: superProd }),
  superProd ? pluginCleanup() : undefined,
  superProd ? pluginStrip({ debugger: true, sourceMap: false, exclude: '**/maixn.js' }) : undefined,
  pluginJson(),
  pluginMp3(),
  pluginImage({ dom: true })
];

export default [
  { plugins, input, output: outputSystem },
  { plugins, input, output: outputEs }
];
