import { build } from 'esbuild';
import { execSync } from 'node:child_process';
import { mkdirSync, copyFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

await build({
  entryPoints: [path.join(root, 'src/index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: ['es2020'],
  outfile: path.join(dist, 'index.js'),
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  sourcemap: true,
  logLevel: 'info',
});

copyFileSync(path.join(root, 'src/styles.css'), path.join(dist, 'styles.css'));

execSync('npx tsc -p tsconfig.json', { cwd: root, stdio: 'inherit' });

console.log('Build complete -> dist/');
