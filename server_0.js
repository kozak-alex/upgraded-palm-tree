const converter = require('./myconverter');
const fs = require('fs');               /* file system */
const http = require('http');

/*fs.readFile('', function(err,data) {*/
 /*fs.readFile('index.html', {encoding: "utf-8"}, (err,data) => {  */  
fs.readFile('index.html', (err,data) => {   
    if(err) return;
    console.log(data);

})

const server = http.createServer((req, res) => {
  /*  res.statusCode =200; 
  res.end(`20$ is ${converter.usdToUah(20)} UAH`);*/
    fs.readFile('tipcalc.html', (err,data) => {   
        if(err) return;
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(data);
    })  
});

server.listen(3000,'localhost',() => {
    console.log('server is working');
})