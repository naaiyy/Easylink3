import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const newVersion = process.argv[2];
if (!newVersion) {
  process.stderr.write('No version provided\n');
  process.exit(1);
}

const rootDir = join(__dirname, '..');

// Read workspace configuration
const workspaceConfig = JSON.parse(
  readFileSync(join(rootDir, 'pnpm-workspace.yaml'), 'utf8')
);

// Get all package paths
const packagePaths = workspaceConfig.packages.filter(p => !p.startsWith('#'));

// Update version in each package.json
for (const packagePath of packagePaths) {
  const packageJsonPath = join(rootDir, packagePath, 'package.json');
  try {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    packageJson.version = newVersion;
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    process.stdout.write(`Updated ${packagePath} to version ${newVersion}\n`);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      process.stderr.write(`Error updating ${packagePath}: ${error}\n`);
    }
  }
}
