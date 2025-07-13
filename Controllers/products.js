const products = [];                       //3amal array 3ashan y save fyf el products

exports.getAddproducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',             
        path: '/admin/add-product'
    });
};


exports.postAddproducts = (req, res, next) => {
    const { title, description, imageUrl, price } = req.body;             //u acess 3ala post req w ya5od mno title w ...
    products.push({ title, description, imageUrl, price });     //y3mlo hagat ely a5dha mn req dh push gowa el array ely foo2
    //console.log(req.body);                                      //dh 3omro mahyshta8l mn 8yyr el parse 3ashan lazm ytargm ely gylo
      
    res.redirect(303,'/shop');                                //dh by3ml redirect ly add product page y3ny bala2yh wadah ly page addproduct
};

exports.GetShopproducts = (req, res, next) => {
    console.log('This is from shop page ',products);    //hena 3amal line dh 3ashan e7na kona 3amlyyn array 7atyyn fy products byta3na esm array (products ) kan mawgood fy admin w et3amlo oush ly product details f hena fy line dh b acess 3alyh
    res.render('shop', {
        prods: products,              //bab3t ly shop.ejs makan kol pords yshylha w y7ot value ely hatygy
        pageTitle: 'Shop',                      //hena byshyl pagetitle ely mawgooda fy head byta3 shop.ejs w y7ot maknha elmyt shop
        path: '/shop/'                          // hena by7adyd action aw href path byta3o yb2a /shop/
    });
};