const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros/basic');
const destination = path.resolve(__dirname, 'src/public/images/heros/optimized');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
} else {
  fs.readdirSync(destination, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      fs.unlinkSync(path.join(destination, file), (error) => {
        if (error) throw error;
      });
    });
  });
}

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(1350)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`,
      ));
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });
