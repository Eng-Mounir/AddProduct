const ProductModel = require('../models/product');      //by3ml import ly file productM mn controller

exports.getAddproducts = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};


exports.postAddproducts = (req, res, next) => {
    const { title, description, imageUrl, price } = req.body;             //u acess 3ala post req w ya5od mno title w ...

    //console.log(req.body);                                      //dh 3omro mahyshta8l mn 8yyr el parse 3ashan lazm ytargm ely gylo


    const ProductDataModel = new ProductModel(title, description, imageUrl, price);   //3amal object w ba3at fy data ly model (controllers/productM)ely a5dha mn post req ely fy body ely line ely foo2 data (titel w image w desc ...)
    
    
    ProductDataModel.save();               //3aml save ly data dy y3ny 3amalha push gowa array ely esmo products ely mawgood Controllers/productM


    res.redirect(303,'/shop');                                //dh by3ml redirect ly add product page y3ny bala2yh wadah ly page addproduct
};


exports.GetProducts = (req, res, next) => {
ProductModel.fetchAll((products) => {
    res.render('admin/product-Admin-list', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
    });
});
};