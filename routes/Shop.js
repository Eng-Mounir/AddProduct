// const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');
// const AdminData = require('./admin');
// const router = express.Router();
//   // All methods => /shop/
// router.use('/', (req, res, next) => {
//   console.log('This is from shop page ',AdminData.products);
//       res.sendFile(path.join(rootDir,'views','shop.html'));
// });
// module.exports = router;


// //section module 6
// const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');
// const AdminData = require('./admin');                  //hena 3amal line dh 3ashan e7na kona 3amlyyn array 7atyyn fy products byta3na esm array (products ) kan mawgood fy admin w et3amlo oush ly product details f hena fy line dh b acess 3alyh

// const router = express.Router();

// // All methods => /shop/
// router.use('/', (req, res, next) => {
//   console.log('This is from shop page ', AdminData.products);    //hena 3amal line dh 3ashan e7na kona 3amlyyn array 7atyyn fy products byta3na esm array (products ) kan mawgood fy admin w et3amlo oush ly product details f hena fy line dh b acess 3alyh
//   res.render('shop', {
//     prods: AdminData.products,              //bab3t ly shop.ejs makan kol pords yshylha w y7ot value ely hatygy
//     pageTitle: 'Shop',                      //hena byshyl pagetitle ely mawgooda fy head byta3 shop.ejs w y7ot maknha elmyt shop
//     path: '/shop/'                          // hena by7adyd action aw href path byta3o yb2a /shop/
//   });
// }); // <-- this closing parenthesis was missing

// module.exports = router;




//section 99
const express = require('express');
const path = require('path');

const router = express.Router();


const shopController = require('../Controllers/shop');



router.get('/products',shopController.GetShopproducts);
router.use('/cart',shopController.GetCart);
router.get('/checkout', shopController.GetCheckout);

// All methods => /shop/
router.get('/',shopController.GetIndex);        //hena nadah 3ala controller w da5l mno 3al function 3ala tool

module.exports = router;













