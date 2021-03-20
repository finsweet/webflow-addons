// Import ESBuild
const { buildSync } = require('esbuild'); // eslint-disable-line

// Default Settings
const defaultSettings = {
  bundle: true,
  minify: true,
  sourcemap: false,
  outdir: 'dist',
  target: 'es6',
};

// Files building
buildSync({
  ...defaultSettings,
  entryPoints: [
    'src/disable-scrolling/disable-scrolling.ts',
    'src/editor-friendly-link-blocks/editor-friendly-link-blocks.ts',
    'src/copy-clipboard/copy-clipboard.ts',
  ],
});
