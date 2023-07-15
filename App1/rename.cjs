const fs = require('fs');
const path = require('path');

const parentFolderPath = process.cwd();

function renameFiles(folderPath) {
  fs.readdirSync(folderPath).forEach((file) => {
    const currentFilePath = path.join(folderPath, file);
    const isDirectory = fs.statSync(currentFilePath).isDirectory();

    if (isDirectory) {
      renameFiles(currentFilePath);
    } else if (file.endsWith('.js')) {
      const newFilePath = path.join(folderPath, file.replace('.js', '.ts'));
      fs.renameSync(currentFilePath, newFilePath);
    }
  });
}

renameFiles(parentFolderPath);
console.log('Renaming completed!');
