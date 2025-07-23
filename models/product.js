const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

module.exports = class Product {
  constructor(title, description, imageUrl, price) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  save() {
    const p = path.join(rootDir, 'data', 'products.json');
    console.log('Final product path:', p);

    fs.readFile(p, (err, fileContent) => {
      let products = [];

      if (!err) {
        try {
          products = JSON.parse(fileContent);
        } catch (parseErr) {
          console.error('Error parsing products.json:', parseErr);
        }
      }

      products.push(this);

      fs.writeFile(p, JSON.stringify(products, null, 2), err => {
        if (err) {
          console.error('Error writing to file:', err);
        }
      });
    });
  }

  static fetchAll(cb) {
  const p = path.join(rootDir, 'data', 'products.json');

  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]); // 📌 If there's a read error (e.g., file doesn't exist), return empty array
    }

    try {
      const products = JSON.parse(fileContent); // 📌 Try to parse the JSON file content
      cb(products); // 📌 If successful, pass the products array to the callback
    } catch (parseErr) {
      console.error('Error parsing products.json:', parseErr);
      cb([]); // 📌 If parsing fails (e.g., corrupted JSON), also return empty array
    }
  });
}

};
