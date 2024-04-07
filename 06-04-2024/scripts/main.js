let productList = [];
let _productList;

let cartList = [];
const cartItemCount = document.getElementById("totalCartItemCount");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const searchInputEl = document.getElementById("searchInput");

const increaseHandler = (event) => {
  const clickedProductId = event.target.attributes["data-productId"].value;
  const cartItem = cartList.find((item) => item.id == clickedProductId);
  if (cartItem.count < 100 && cartItem.stock > cartItem.count) cartItem.count++;
  renderCartItems();
  localStorage.setItem("cartList", JSON.stringify(cartList));
};

const decreaseHandler = (event) => {
  const clickedProductId = event.target.attributes["data-productId"].value;
  const cartItem = cartList.find((item) => item.id == clickedProductId);
  if (cartItem.count === 1) {
    cartList = cartList.filter((item) => item.id != clickedProductId);
  } else cartItem.count--;
  renderCartItems();
  localStorage.setItem("cartList", JSON.stringify(cartList));
};

const renderCartItems = () => {
  const cartSectionWrapper = document.getElementById("cartItemsWrapper");
  cartSectionWrapper.innerHTML = "";
  cartList.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.setAttribute("class", "flex items-center justify-between");

    const leftSection = document.createElement("div");
    leftSection.setAttribute("class", "flex items-center gap-3");
    const productImg = document.createElement("img");
    productImg.setAttribute("src", item.productImg);
    productImg.setAttribute("class", "h-20 rounded");

    const productInfoWrapper = document.createElement("div");
    productInfoWrapper.setAttribute("class", "flex flex-col");

    const productName = document.createElement("span");
    productName.innerText = item.productName;

    const productPrice = document.createElement("span");
    productPrice.setAttribute("class", "text-gray-700 font-bolder text-lg");
    productPrice.innerText = item.price;
    productInfoWrapper.appendChild(productName);
    productInfoWrapper.appendChild(productPrice);

    const counterWrapper = document.createElement("div");
    counterWrapper.setAttribute("class", "flex gap-2 items-center");
    const decreaseBtn = document.createElement("button");
    decreaseBtn.setAttribute("class", "bg-gray-300 p-2 rounded");
    decreaseBtn.innerText = "-";
    decreaseBtn.setAttribute("name", "decreaseBtn");
    decreaseBtn.setAttribute("data-productId", item.id);

    const productCount = document.createElement("span");
    productCount.setAttribute(
      "class",
      "bg-gray-400 p-2 rounded text-white text-xl font-bolder"
    );
    productCount.innerText = item.count;

    const increaseBtn = document.createElement("button");
    increaseBtn.setAttribute("class", "bg-gray-300 p-2 rounded");
    increaseBtn.innerText = "+";
    increaseBtn.setAttribute("name", "increaseBtn");
    increaseBtn.setAttribute("data-productId", item.id);

    counterWrapper.appendChild(decreaseBtn);
    counterWrapper.appendChild(productCount);
    counterWrapper.appendChild(increaseBtn);

    leftSection.appendChild(productImg);
    leftSection.appendChild(productInfoWrapper);

    cartItem.appendChild(leftSection);
    cartItem.appendChild(counterWrapper);

    cartSectionWrapper.appendChild(cartItem);
  });

  const decreaseBtn = document.getElementsByName("decreaseBtn");
  decreaseBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => decreaseHandler(event));
  });

  const increaseBtn = document.getElementsByName("increaseBtn");
  increaseBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => increaseHandler(event));
  });

  cartItemCount.innerText = cartList.length;

  const totalPrice = cartList.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  cartTotalPrice.innerText = Number(totalPrice).toFixed(2) + " TL";
};

const localCartData = localStorage.getItem("cartList");
if (localCartData) {
  cartList = JSON.parse(localCartData);
  renderCartItems();
}

const getAllProducts = async () => {
  await axios
    .get("https://6611426d95fdb62f24eccf90.mockapi.io/products")
    .then((response) => {
      productList = response.data;
      _productList = response.data;
      renderProducts();
    })
    .catch((error) => {
      console.error(error);
    });
};

getAllProducts();

const renderProducts = () => {
  if (productList.length === 0) return;

  const productListEl = document.getElementById("productList");
  productListEl.innerHTML = "";

  const productCountEl = document.getElementById("totalProductCount");
  productCountEl.innerText = productList.length;

  productList.forEach((product) => {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // BEGIN: (1) -- Ürün kartını oluşturan div elemanı oluşturuluyor.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const newProductCard = document.createElement("div");
    newProductCard.setAttribute(
      "class",
      "bg-white p-3 rounded border flex flex-col justify-between"
    );
    newProductCard.setAttribute("id", "productCard");
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // END: (1)
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // BEGIN: (2) -- Ürün görselini tutan img etiketi oluşturuluyor.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.productImg);
    productImage.setAttribute("class", "w-full rounded");
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // END: (2)
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // BEGIN: (3) -- Ürünün başlığını ve açıklamasını tutan elemanlar oluşturulup, div elemanına ekleniyor.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "my-3");

    const productNameEl = document.createElement("h3");
    productNameEl.setAttribute("class", "text-lg text-gray-600 font-bolder");
    productNameEl.innerText = product.productName;

    const productDescriptionEl = document.createElement("p");
    productDescriptionEl.innerText = product.description;
    productDescriptionEl.setAttribute("class", "text-sm text-gray-400");

    productInfo.appendChild(productNameEl);
    productInfo.appendChild(productDescriptionEl);
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // END: (3)
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // BEGIN: (4) -- Ürün fiyatını ve stok bilgisini tutan elemanlar oluşturulup, div elemanına ekleniyor.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const priceInfo = document.createElement("div");
    priceInfo.setAttribute("class", "flex flex-col");
    const priceEl = document.createElement("span");
    const stockEl = document.createElement("span");

    priceEl.innerText = `${product.price} TL`;

    const stockCount = product.stock;
    stockEl.innerHTML = `Son <b>${stockCount}</b> ürün`;

    priceInfo.appendChild(priceEl);
    priceInfo.appendChild(stockEl);
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // END: (4)
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // BEGIN: (5) -- Sepete ekle butonunu tutan eleman ve buton oluşturuluyor.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const btnWrapper = document.createElement("div");
    btnWrapper.setAttribute("class", "mt-5");

    const addToCartBtn = document.createElement("button");
    addToCartBtn.setAttribute("name", "addToCartBtn");
    addToCartBtn.setAttribute("data-productId", product.id);
    addToCartBtn.setAttribute(
      "class",
      "w-full bg-purple-600 py-1 rounded text-gray-200"
    );
    addToCartBtn.innerText = "Sepete Ekle";

    btnWrapper.appendChild(addToCartBtn);
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // END: (5)
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // BEGIN: (6) -- Bütün elemanların card elemanına eklenmesi.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    newProductCard.appendChild(productImage);
    newProductCard.appendChild(productInfo);
    newProductCard.appendChild(priceInfo);
    newProductCard.appendChild(btnWrapper);
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // END: (6)
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // BEGIN: (7) -- Card elemanının ürün listesine eklenmesi.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    productListEl.appendChild(newProductCard);
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // END: (7)
    ////////////////////////////////////////////////////////////////////////////////////////////////
  });

  const addToCartBtn = document.getElementsByName("addToCartBtn");
  addToCartBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const clickedProductId = event.target.attributes["data-productId"].value;
      const clickedProduct = productList.find(
        (product) => product.id === clickedProductId
      );

      const cartItemIndex = cartList.find(
        (cartItem) => cartItem.id === clickedProductId
      );

      const cartListItem = cartList.find(
        (product) => product.id === clickedProductId
      );
      if (cartItemIndex && cartItemIndex?.stock - 1 < cartListItem.count) {
        Swal.fire({
          icon: "error",
          title: "Hata!",
          text: "Stok yetersiz!",
        });
        return;
      }
      if (!cartItemIndex) {
        cartList.push({
          ...clickedProduct,
          count: 1,
        });
      } else {
        cartList.find((item) => item.id === clickedProductId).count++;
      }

      localStorage.setItem("cartList", JSON.stringify(cartList));
      renderCartItems();
    });
  });
};

searchInputEl.addEventListener("input", (event) => {
  const inputValue = searchInputEl.value;
  productList = productList.filter((item) => {
    return item.productName.toLowerCase().includes(inputValue.toLowerCase());
  });

  if (inputValue === "") productList = _productList;

  renderProducts();
});
