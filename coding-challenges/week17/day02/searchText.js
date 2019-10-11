const fs = require('fs');

const searchString = (targetFilePath, targetSearch) => {
  let fileContent = fs.readFileSync(targetFilePath).toString().split(' ');
  fileContent.forEach((item, index) => {
    if (item===targetSearch) {
      console.log(`${item} is at index ${index}`);
    }
  });
}

searchString("./testfile.txt", "colours")
