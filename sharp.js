const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, 'src/public/images/heros');
const destinationDir = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

fs.readdirSync(sourceDir).forEach((image) => {
  const ext = path.extname(image).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') {
    console.log(`Processing ${image}`);
    sharp(`${sourceDir}/${image}`)
      .resize(800)
      .toFile(`${destinationDir}/${image.split('.').slice(0, -1).join('.')}-large.jpg`, (err) => {
        if (err) {
          console.error(`Error processing ${image} (large):`, err);
        } else {
          console.log(`Processed ${image} (large)`);
        }
      });
    sharp(`${sourceDir}/${image}`)
      .resize(480)
      .toFile(`${destinationDir}/${image.split('.').slice(0, -1).join('.')}-small.jpg`, (err) => {
        if (err) {
          console.error(`Error processing ${image} (small):`, err);
        } else {
          console.log(`Processed ${image} (small)`);
        }
      });
  } else {
    console.warn(`Skipping unsupported image format: ${image}`);
  }
});
