// Import ESBuild
import esbuild from 'esbuild';

const { buildSync } = esbuild;

/**
 * Default settings
 * @type {esbuild.BuildOptions}
 */
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
  entryPoints: ['custom-slider-dots/load.ts'],
  outfile: 'dist/custom-slider-dots.js',
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

buildSync({
  ...defaultSettings,
  entryPoints: ['display-style-values/load.ts'],
  outfile: 'dist/display-style-values.js',
});

buildSync({
  ...defaultSettings,
  entryPoints: ['mirror-events/load.ts'],
  outfile: 'dist/mirror-events.js',
});
