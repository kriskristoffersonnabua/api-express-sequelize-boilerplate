module.exports = (path) => {
  const fs = require('fs');
  const files = fs.readdirSync(path);
  return files;
}
