// //section 33 w 34 w 35 w 36 w 37 w 38 
// const fs = require('fs');
// const RequestHandler = (req, res) => {    //hena 3awz awsel el req w res ely gayly mn app.js ly routes.js a3ml eh ?
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
// };

// module.exports = RequestHandler;