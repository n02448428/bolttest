// Shim toSorted globally
if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function (compareFn) {
    return [...this].sort(compareFn);
  };
}
// Attempt to run npm install programmatically
const { execSync } = require('child_process');
try {
  execSync('npm install', { stdio: 'inherit' });
} catch (error) {
  console.error('Install failed:', error.message);
}