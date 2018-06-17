let self = {}

let products = []

self.addProduct = function (data) {
  console.log('soy service', data)
  let newProduct = {
    name: data.name,
    url: data.url,
    price: data.price,
  }
  products.push(newProduct);
  return products
}

self.getProducts = function () {
  return products
}

module.exports = self
