import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

type User = {
    name: string;
    age: number;
  };

type Item = {
    sku: number;
    name: string; 
    price: number;
    numInStock: number;
}

const triscuit: Item = {
    sku: 54789,
    name: "triscuit",
    price: 5.79,
    numInStock: 0
}

function checkIfAvailable(product: Item){
    const availableMessage = `There are ${product.numInStock} ${product.name}s in stock.`
    const unavailableMessage = `${product.name}s are out of stock`
    if (product.numInStock <= 0) {
        return unavailableMessage
    } else {
        return availableMessage
    }
}



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(checkIfAvailable(triscuit));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});