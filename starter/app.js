// const url = "https://course-api.com/javascript-store-products";
// const productsDOM = document.querySelector(".products-center");

// const fetchProducts = async () => {
//   productsDOM.innerHTML = `<div class="loading"></div>`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     productsDOM.innerHTML = `<p class="error">There was an error</p>`;
//   }
// };

// const displayProducts = (list) => {
//   const productList = list
//     .map((product) => {
//       const { id } = product;
//       const { name: title, price } = product.fields;
//       const { url: img } = product.fields.image[0];
//       const formatPrice = price / 100;
//       // id,name,price,img
//       return `<a href="product.html" class="single-product">
//   <img src="${img}" alt="${title}" class="single-product-img img" />
//   <footer>
//     <h5 class="name">${title}</h5>
//     <span class="price">${formatPrice}$</span>
//   </footer>
// </a>`;
//     })
//     .join(" ");
//   productsDOM.innerHTML = `<div class="products-container">
//        ${productList}
//   </div>`;
// };

// const start = async () => {
//   const data = await fetchProducts();
//   displayProducts(data);
// };
// fetchProducts();
// start();
// // console.log(list[0].fields.image[0].url);

// const url = "https://course-api.com/javascript-store-products";
// const productsDOM = document.querySelector(".products-center");

// const fetchProducts = async () => {
//   productsDOM.innerHTML = `<div class="loading"></div>`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     productsDOM.innerHTML = `<div class= "error">There was an error</div>`;
//   }
// };

// // id,name,price,img
// const displayProducts = (list) => {
//   const productList = list
//     .map((product) => {
//       const { id } = product;
//       const { name: title, price } = product.fields;
//       const formatPrice = price / 100;
//       const { url: img } = product.fields.image[0];
//       return `<a href="product.html?id=${id}&name=john&age=25" class="single-product">
//       <img src="${img}" alt="${title}" class="single-product-img img" />
//       <footer>
//         <h5 class="name">${title}</h5>
//         <span class="price">${formatPrice}$</span>
//       </footer>
//     </a>`;
//     })
//     .join(" ");
//   productsDOM.innerHTML = `<div class="products-container">
//   ${productList}</div>`;
// };

// const start = async () => {
//   const data = await fetchProducts();
//   displayProducts(data);
//   console.log(data);
// };
// fetchProducts();https://course-api.com/javascript-store-products
// start();

// ----------------------------------------------------------------------------------------------------------
const url = "https://course-api.com/javascript-store-products";
const productsDOM = document.querySelector(".products-center");

// fetch data function

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayProducts(data);
  } catch (error) {
    productsDOM.innerHTML = `<div class="error">There was an error</div>`;
  }
};

fetchProducts();

// Display data ,, id,name,price,url

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      // the line below we're passing the location of the image which is the id through url and catch it in the next page by urlsearchparams
      return `<a href="product.html?id=${id}" class="single-product">
     <img src="${img}" alt="${title}" class="single-product-img img" />
      <footer>
        <h5 class="name">${title}</h5>
        <span class="price">${formatPrice}$</span>
      </footer>
</a>`;
    })
    .join(" ");
  productsDOM.innerHTML = `<div class="products-container"> ${productList}</div>`;
};
