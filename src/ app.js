const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const item = {
    sku: 54789,
    name: "triscuit",
    price: 5.79,
    numInStock: 0
}

function checkIfAvailable(productName){
    if (item.numInStock <= 0) {
        console.log(`${item.name}s are out of stock`)
    } else {
        console.log(`There are ${item.numInStock} ${item.name}s in stock.`)
    }
}

checkIfAvailable(item.name)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(item.name);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});