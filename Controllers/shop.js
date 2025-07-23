// // dh abl models
// const products = [];                       //3amal array 3ashan y save fyf el products

// exports.getAddproducts = (req, res, next) => {
//     res.render('add-product', {
//         pageTitle: 'Add Product',
//         path: '/admin/add-product'
//     });
// };


// exports.postAddproducts = (req, res, next) => {
//     const { title, description, imageUrl, price } = req.body;             //u acess 3ala post req w ya5od mno title w ...
//     products.push({ title, description, imageUrl, price });     //y3mlo hagat ely a5dha mn req dh push gowa el array ely foo2
//     //console.log(req.body);                                      //dh 3omro mahyshta8l mn 8yyr el parse 3ashan lazm ytargm ely gylo
      
//     res.redirect(303,'/shop');                                //dh by3ml redirect ly add product page y3ny bala2yh wadah ly page addproduct
// };

// exports.GetShopproducts = (req, res, next) => {
//     console.log('This is from shop page ',products);    //hena 3amal line dh 3ashan e7na kona 3amlyyn array 7atyyn fy products byta3na esm array (products ) kan mawgood fy admin w et3amlo oush ly product details f hena fy line dh b acess 3alyh
//     res.render('shop', {
//         prods: products,              //bab3t ly shop.ejs makan kol pords yshylha w y7ot value ely hatygy
//         pageTitle: 'Shop',                      //hena byshyl pagetitle ely mawgooda fy head byta3 shop.ejs w y7ot maknha elmyt shop
//         path: '/shop/'                          // hena by7adyd action aw href path byta3o yb2a /shop/
//     });
// };




// //section model 101  zwedna line 33 w 43 w 46 w 47 w 52 3ashan req y acess body w ya5ood hagat fy line 43 w line 46 3amal new object 3ashan yb3at fyh data ly model w line 47 nadah 3ala function save 3asahn y3ml push gowa array prodcut
// const ProductModel = require('../models/productM');      //by3ml import ly file productM mn controller
// exports.getAddproducts = (req, res, next) => {
//     res.render('add-product', {
//         pageTitle: 'Add Product',
//         path: '/admin/add-product'
//     });
// };


// exports.postAddproducts = (req, res, next) => {
//     const { title, description, imageUrl, price } = req.body;             //u acess 3ala post req w ya5od mno title w ...

//     //console.log(req.body);                                      //dh 3omro mahyshta8l mn 8yyr el parse 3ashan lazm ytargm ely gylo


//     const ProductDataModel = new ProductModel(title, description, imageUrl, price);   //3amal object w ba3at fy data ly model (controllers/productM)ely a5dha mn post req ely fy body ely line ely foo2 data (titel w image w desc ...)
    
    
//     ProductDataModel.save();               //3aml save ly data dy y3ny 3amalha push gowa array ely esmo products ely mawgood Controllers/productM


//     res.redirect(303,'/shop');                                //dh by3ml redirect ly add product page y3ny bala2yh wadah ly page addproduct
// };

// exports.GetShopproducts = (req, res, next) => {

//     const products = ProductModel.fetchAll();    //hena 3amal fetch nadah 3ala function dy ely betrag3 array ely esmo products ely fyh kol data (image w desc w price w kolo) mn Controllers/productM.js

//     res.render('shop', {
//         prods: products,              //bab3t ly shop.ejs makan kol pords yshylha w y7ot value ely hatygy
//         pageTitle: 'Shop',                      //hena byshyl pagetitle ely mawgooda fy head byta3 shop.ejs w y7ot maknha elmyt shop
//         path: '/shop/'                          // hena by7adyd action aw href path byta3o yb2a /shop/
//     });
// };





// //section 102 w 103
// const ProductModel = require('../models/product');      //by3ml import ly file productM mn controller
// exports.getAddproducts = (req, res, next) => {
//     res.render('admin/add-product', {
//         pageTitle: 'Add Product',
//         path: '/admin/add-product'
//     });
// };


// exports.postAddproducts = (req, res, next) => {
//     const { title, description, imageUrl, price } = req.body;             //u acess 3ala post req w ya5od mno title w ...

//     //console.log(req.body);                                      //dh 3omro mahyshta8l mn 8yyr el parse 3ashan lazm ytargm ely gylo


//     const ProductDataModel = new ProductModel(title, description, imageUrl, price);   //3amal object w ba3at fy data ly model (controllers/productM)ely a5dha mn post req ely fy body ely line ely foo2 data (titel w image w desc ...)
    
    
//     ProductDataModel.save();               //3aml save ly data dy y3ny 3amalha push gowa array ely esmo products ely mawgood Controllers/productM


//     res.redirect(303,'/shop');                                //dh by3ml redirect ly add product page y3ny bala2yh wadah ly page addproduct
// };

// exports.GetShopproducts = (req, res, next) => {
// ProductModel.fetchAll((products) => {
//     res.render('shop/product-list', {
//         prods: products,
//         pageTitle: 'Shop',
//         path: '/shop/'
//     });
// });
// };




//section 110
const ProductModel = require('../models/product');      //by3ml import ly file productM mn controller

exports.GetShopproducts = (req, res, next) => {
ProductModel.fetchAll((products) => {
    res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products/'
    });
});
};


exports.GetIndex = (req, res, next) => {
ProductModel.fetchAll((products) => {
    res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/shop/'
    });
});
};


exports.GetCart = (req, res, next) => {
  const Product = require('../models/product');

  Product.fetchAll((products) => {
    const cart = products.slice(0, 4); // ✅ example: simulate 2 items in the cart
    const totalPrice = cart.reduce((total, item) => total + +item.price, 0);

    res.render('shop/cart', {
      pageTitle: 'Cart',
      path: '/shop/cart',
      cart: cart,
      totalPrice: totalPrice
      
    });
  });
};




exports.GetCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        
        pageTitle: 'Checkout',
        path: '/checkout/'
    });
};



