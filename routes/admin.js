// const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');
// const products = [];
// const router = express.Router();
//   // All methods => /admin/users
//   router.use('/users', (req, res, next) => {
//     res.send('<h1>hello from users</h1>');
//   });
//   // Get => /admin/add-product
//   router.get('/add-product', (req, res, next) => {
//       res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//       // res.send('<body><form action="/admin/add-product" method="POST"><input type="text" name="ProductName"><button type="submit">Add Product</button></form></body>');                      //dh aham haga fyh action (form action="/product" method="POST") by2olo action awel maydoos 3al zorar y3mlo redirect ly / product page
//   });
//   //POST => /admin/add-product
// router.post('/add-product', (req, res, next) => {
//     console.log(req.body);                                      //dh 3omro mahyshta8l mn 8yyr el parse 3ashan lazm ytargm ely gylo
//     //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
//       //res.send('<h1>hello from product</h1>');
//     res.redirect(308,'/admin/users');                                //dh by3ml redirect ly add product page y3ny bala2yh wadah ly page addproduct
//   });
// module.exports = {
//   router,
//   products
// };








// const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');
// const { title } = require('process');
// const products = [];
// const router = express.Router();
//   // All methods => /admin/users
//   router.use('/users', (req, res, next) => {
//     res.send('<h1>hello from users</h1>');
//   });
//   // Get => /admin/add-product
// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// });
// router.post('/add-product', (req, res, next) => {
//   products.push({ title: req.body.title });
//     //console.log(req.body);                                      //dh 3omro mahyshta8l mn 8yyr el parse 3ashan lazm ytargm ely gylo
    
//     res.redirect(307,'/shop');                                //dh by3ml redirect ly add product page y3ny bala2yh wadah ly page addproduct
//   });
// module.exports = {
//   router,
//   products
// };




// const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');
// const { title } = require('process');
// const products = [];
// const router = express.Router();
//   // All methods => /admin/users
//   router.use('/users', (req, res, next) => {
//     res.send('<h1>hello from users</h1>');
//   });
//   // Get => /admin/add-product
// router.get('/add-product', (req, res, next) => {
//   res.render('add-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product'
//   });
  
// });
// router.post('/add-product', (req, res, next) => {
//   const { title, description, imageUrl,price } = req.body;
//   products.push({ title, description, imageUrl,price });
//     //console.log(req.body);                                      //dh 3omro mahyshta8l mn 8yyr el parse 3ashan lazm ytargm ely gylo
    
//     res.redirect(307,'/shop');                                //dh by3ml redirect ly add product page y3ny bala2yh wadah ly page addproduct
//   });
// module.exports = {
//   router,
//   products
// };



//section 99 by adding mvc transefer the render to controller 
const express = require('express');
const path = require('path');

//const { title } = require('process');

const router = express.Router();

const productController = require('../Controllers/products');

  // Get => /admin/add-product
router.get('/add-product', productController.getAddproducts);


router.post('/add-product', productController.postAddproducts);
module.exports =router;




