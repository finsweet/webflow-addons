const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  minify: true,
  sourcemap: false,
  target: 'es6',
});

esbuild.buildSync({
  entryPoints: ['src/disable-scrolling/index.ts'],
  outfile: 'dist/disable-scrolling/index.js',
  bundle: true,
  minify: true,
  sourcemap: false,
  target: 'es6',
});

esbuild.buildSync({
  entryPoints: ['src/embed-code-snippets/index.ts'],
  outfile: 'dist/embed-code-snippets/index.js',
  bundle: true,
  minify: true,
  sourcemap: false,
  target: 'es6',
});
