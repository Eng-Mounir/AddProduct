// // create a node Server
// const http = require('http');      // nadah 3ala module http global byta3 node.js ,,, 5alyh balk lw ./http kda bawdylo path ly file ana creato b esm http.js w a2der a3ml custome ly file dh w dh not recommanded
// const server= http.createServer((req, res) => {         // betsta2byl req (from the client) and response (from the server) dy kolha aslun build in function esmha reqlistenner
//   //console.log(req);
//   console.log(req.headers, req.url, req.method);         // garab e3ml run 3al browser with localhost:3000/aloomeen url: ay haga b3d slash ('/') ely howa alo meen header baa ba2yt hagat w method ely homa get w post etc
  
//   //process.exit();                               // lw 3awz a end listenner ely hayfdl sha8aal dh (lisener mn server ay response haga lyha 3lakaa bel event loop)
// });
// server.listen(3000);                   //3000 dh rakam port ely 3awz asta2bl 3alyh lama bagy a access localhost:3000




// //anwa3 resp ly server
// const http = require('http');
// //all response momkn yt3aml w at7km fyh
// http.createServer((req, res) => {                                 //momken a3ml tary2et chunk zy dy a3ml kaza setheader taht ba3do y2ama ab3t data kolha fy res.end mara wahda
//   res.setHeader('Content-Length', '11');                          // dy fyha 9 anwa3 mn a5er by7awel media file extention ely enta ba3to fy response 3ala hasab data y3ny y7awelha json,xml,jpg etc
//   res.setHeader('Content-Encoding', 'gzip');
//   res.setHeader('Content-Language', 'en');
//   res.setHeader('Cache-Control', 'no-cache');
//   res.setHeader('ETag', '"xyz789"');
//   res.setHeader('Set-Cookie', 'user=Ali; HttpOnly');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  
//   res.setHeader('Connection', 'keep-alive');

//   res.end('Hello World');
// }).listen(3000);



// //section 33 w 34 w 35 w 36 w 37 w 38
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === '/') {
//     res.write('<html>');
//     res.write('<head><title>Enter Message</title></head>');
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//   }
//   else if (url === '/message' && method === 'POST') {
//     const body = [];
//     req.on('data', (chunck) => {
//       console.log(chunck);
//       body.push(chunck);
//     });
//     req.on('end', () => {
//       const parsebody = Buffer.concat(body).toString();  //
//       const message = parsebody.split('=')[1];           // dyh (1)
//       fs.writeFile('message.txt', message, (error) => {           //ablha kona 3amlyyn fs.writeSync('message.txt',message) hena dh block coding y3ny lw hasl error ay code b3do haybooz lakn writefile non blocking code byshta8al async f byhandle moshkla w ahsan mno
//     res.statusCode = 302;                //
//     res.setHeader('location', '/');      // maynf3shy 3 lines dool yt7ato gowa (1) 3ashan lw hasal kda ay haga b3d return res.end hatyshta8l 3ashn hwar async wsync f dool hayt3atlo w code haybooz
//     return res.end();                     //
//       });          //
//     })
//     // res.statusCode = 302;                //
//     // res.setHeader('location', '/');      // maynf3shy 3 lines dool yt7ato gowa (1) 3ashan lw hasal kda ay haga b3d return res.end hatyshta8l 3ashn hwar async wsync f dool hayt3atlo w code haybooz
//     // return res.end();                     //
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });



//section39
// const http = require('http');
// const express = require('express');                                       //by3ml import ly module express


// const app = express();                                                    // b dfine app ( application ly express ba7oto gowa express) 3ashan express dy aslha function gya mn libary el express app dy baa hasta5dhma 3ashan tyhandely dnya aap.
                                                                          // When you call it (express()), it returns an app object — this object lets you define:  1)Routes (app.get(...), app.post(...))   2)Middleware (app.use(...))  3)Configuration (app.set(...)) 4)Error handling   5)Listening on ports (app.listen(...))


//const routes = require('./routes');           //b call module w 7atyt ./ 3ashn ywadyh ly path file ely esmo route **Note** momkn a7oot app bad; ./route 7athandele bardo server


// app.use((req, res, next) => {
//   console.log("alo");
//   next();                       //hena lw ma3mltysh next() msh hayd5ol 3al middleware ely b3dha w hy print alo bs mn 8yyr alo222
// });                                                           //app.use dh use dy method mawgooda gowa framework el express 3asahan ty add middleware function 3ashan mawdoo3 yb2a zy chaining kol middleware metwasl bely b3do l8ayt lama yb3at res w y2fyl   ( use.app it accept an array of requestuests handlers)


// app.use((req, res, next) => {
//   console.log("alo222");         //7aty print alo2222 lw fyh next() fy middleware ely ablha 8yyr kda msh hatytab3
//   res.send('<h1>Hello Mony</h1>');           //hena ba3at response 5alas ly front end katab 3ala tool res.send badl makan byktyb res.setHeader w res.write (raw code laa ehna ba2yna bensyta5d res.send (express))
// });                                          //**Note** lw fat7na browser hetyt netwaort 7atla2y content type et3aml automatically b html express ely et3araf 3alyh badl makan ba3mlo manuaally




// const server = http.createServer(app);                                 //hena momken ysta5dm gowa createServer(app) 3asahn momkn el app yhandle dnya ely howa el express bs e7na benysta5dm fy 3ady route ely gowa file path byta3 ./route henak ely fyh kol el routing ely ehna 3amlyno
// server.listen(3000, () => {
//      console.log('Server running at http://localhost:3000');            //***NOTE***  BADL Maktyb line 100 w 101 w 102 w 103 momkn a5tasr w asta5dm espress ( app.listen(3000))
// });




//section 63 using all by express
// const express = require('express');
// const app = express();
// app.use((req, res, next) => {
//   console.log("alo");
//   next();
// });

// app.use('/',(req, res, next) => {
//   console.log("alo222");
//   res.send('<h1>hello mony</h1>');
// });


// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });




// //section65 w 66 w 67
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const app = express();

// app.set('view engine', 'ejs');                 //set default engine byta3na ly ejs 
// app.set('views', 'views');                     // ba2olo en ejs dh dawer 3alyh fy folder el views 

// const AdminData = require('./routes/admin');      //admin data dy mawgood fy admin ely gowa el routes 
// const ShopRoutes = require('./routes/Shop');
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin',AdminData.router);                 
// app.use('/shop', ShopRoutes);

// app.use('/', (req, res, next) => {
//   //res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
//   res.render('404', {
//     pageTitle: 'Error Page',
//     path: '/admin/add-product'
//   })
// });
// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });



//section 99               hena 8ayyr admindata => admin routes w error render 5alha fy controller
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');                 //set default engine byta3na ly ejs 
app.set('views', 'views');                     // ba2olo en ejs dh dawer 3alyh fy folder el views 

const AdminRoutes = require('./routes/admin');      //admin data dy mawgood fy admin ely gowa el routes 
const ShopRoutes = require('./routes/Shop');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',AdminRoutes);                 
app.use('/shop', ShopRoutes);

app.use('/', (req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
  res.render('404', {
    pageTitle: 'Error Page',
    path: '/admin/add-product'
  })
});



app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});



