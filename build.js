// Import ESBuild
const { buildSync } = require('esbuild'); // eslint-disable-line

// Default Settings
const defaultSettings = {
  bundle: true,
  minify: true,
  sourcemap: false,
  // outdir: 'dist',
  outdir: '../../Users/alexi/OneDrive/Espai de Treball/Finsweet/Power Projects/Webflow Addons',
  target: 'es6',
};

// Files building
buildSync({
  ...defaultSettings,
  entryPoints: [
    'src/copy-clipboard/copy-clipboard.ts',
    'src/disable-scrolling/disable-scrolling.ts',
    'src/editor-friendly-link-blocks/editor-friendly-link-blocks.ts',
    'src/infinite-slider/infinite-slider.ts',
  ],
});
