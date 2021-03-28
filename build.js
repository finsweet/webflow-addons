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
  entryPoints: ['copy-clipboard/index.ts'],
  outfile: 'dist/copy-clipboard.js',
});

buildSync({
  ...defaultSettings,
  entryPoints: ['disable-scrolling/index.ts'],
  outfile: 'dist/disable-scrolling.js',
});
buildSync({
  ...defaultSettings,
  entryPoints: ['editor-friendly-link-blocks/index.ts'],
  outfile: 'dist/editor-friendly-link-blocks.js',
});
buildSync({
  ...defaultSettings,
  entryPoints: ['infinite-sliders/index.ts'],
  outfile: 'dist/infinite-sliders.js',
});
