// Import ESBuild
const { buildSync } = require('esbuild'); // eslint-disable-line

// Default Settings
const defaultSettings = {
  bundle: true,
  minify: true,
  sourcemap: false,
  target: 'es6',
};

// Files building
buildSync({
  ...defaultSettings,
  entryPoints: ['copy-clipboard/load.ts'],
  outfile: 'dist/copy-clipboard.js',
});

buildSync({
  ...defaultSettings,
  entryPoints: ['disable-scrolling/load.ts'],
  outfile: 'dist/disable-scrolling.js',
});
buildSync({
  ...defaultSettings,
  entryPoints: ['editor-friendly-link-blocks/load.ts'],
  outfile: 'dist/editor-friendly-link-blocks.js',
});
buildSync({
  ...defaultSettings,
  entryPoints: ['infinite-sliders/load.ts'],
  outfile: 'dist/infinite-sliders.js',
});
