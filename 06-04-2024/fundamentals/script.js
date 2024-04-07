// ### FETCH ### ///

async function getProducts() {
  const productData = await fetch(
    "https://6611426d95fdb62f24eccf90.mockapi.io/products"
  );

  const products = await productData.json();
  console.log(products);

  /*   await fetch("https://6611426d95fdb62f24eccf90.mockapi.io/products")
    .then(async (response) => {
      console.log(await response.json());
    })
    .catch((error) => {
      console.log(error);
    }); */
}

async function createProduct() {
  const newProduct = {
    id: 1234567890,
    productName: "Yeni ürün",
    price: "100.55",
    description: "Bu bir açıklamadır.",
    stock: 150,
  };

  await fetch("https://6611426d95fdb62f24eccf90.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
  });
}

async function deleteProduct() {
  await fetch("https://6611426d95fdb62f24eccf90.mockapi.io/products/68", {
    method: "DELETE",
  });
}

async function updateProduct() {
  const updatedProduct = {
    id: 1234567890,
    productName: "Yeni ürün",
    price: "100.55",
    description: "Bu bir açıklamadır.",
    stock: 150,
  };

  await fetch("https://6611426d95fdb62f24eccf90.mockapi.io/products/60", {
    method: "PUT",
    body: JSON.stringify(updatedProduct),
  });
}

/*
getProducts();
createProduct();
deleteProduct();
updateProduct();
*/

/// ### AXIOS ### ///

async function _getProducts() {
  const productList = await axios.get(
    "https://6611426d95fdb62f24eccf90.mockapi.io/products"
  );
  console.log(productList.data);
}

async function _createProduct() {
  const newProduct = {
    id: 1234567890,
    productName: "Yeni ürün",
    price: "100.55",
    description: "Bu bir açıklamadır.",
    stock: 150,
  };

  await axios.post(
    "https://6611426d95fdb62f24eccf90.mockapi.io/products",
    newProduct
  );
}

async function _deleteProduct() {
  await axios.delete("https://6611426d95fdb62f24eccf90.mockapi.io/products/85");
}

async function _updateProduct() {
  const updatedProduct = {
    id: 155,
    productName: "Yeni ürün-2",
    price: "155.55",
    description: "Bu bir açıklamadır-2",
    stock: 155,
  };

  await axios.put(
    "https://6611426d95fdb62f24eccf90.mockapi.io/products/60",
    updatedProduct
  );
}

_getProducts();
_createProduct();
_deleteProduct();
_updateProduct();
