// const productDOM = document.querySelector(".product");
// const url = "https://course-api.com/javascript-store-single-product";

// const fetchProduct = async () => {
//   try {
//     productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
//     // the line below we are getting the location of the data which is the id in the url string
//     // console.log(window.location.search);
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get("id");
//     console.log(id);

//     const response = await fetch(`${url}?id=${id}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     productDOM.innerHTML = `<p class="error">There was a problem loading the product, please try again later</p>`;
//   }
// };

// const displayProduct = (product) => {
//   // company,colors,descr,name:title,price,image(url:img)
//   const {
//     company,
//     colors,
//     description,
//     name: title,
//     price,
//     image,
//   } = product.fields;
//   const { url: img } = image[0];
//   const colorList = colors
//     .map((color) => {
//       return `<span class="product-color" style="background:${color}"></span>`;
//     })
//     .join(" ");
//   //   the src attribute of the img tag is beside the id (go to line 12) which helps us to get the clicked image
//   productDOM.innerHTML = ` <div class="product-wrapper">
// <img src="${img}" alt="" class="img" />
// <div class="product-info">
//   <h3>${title}</h3>
//   <h5>${company}</h5>
//   <span>$${price / 100}</span>
//   <div class="colors">
//     ${colorList}
//   </div>
//   <p>
//   ${description}
//   </p>
//   <button class="btn">Add to cart</button>
// </div> `;
// };

// const start = async () => {
//   const data = await fetchProduct();
//   displayProduct(data);
// };
// start();
// ----------------------------------------------------------------------------------------------------------
const url = "https://course-api.com/javascript-store-single-product";
const productDOM = document.querySelector(".product");
// the whole fetch based on the single image id (VIIIIII)
const params = new URLSearchParams(window.location.search);
console.log(params);
const id = params.get("id");
console.log(id);

// fetch single product

const fetchProduct = async () => {
  productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
  try {
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    displayProduct(data);
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There was a problem loading the product, please try again later</p>`;
  }
};

fetchProduct();

const displayProduct = (product) => {
  console.log(product);
  // company , title, desc, name, price,url,colors
  const { company, description, name: title, price } = product.fields;
  const { url: img } = product.fields.image[0];
  document.title = title.toUpperCase();
  const colorList = product.fields.colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join(" ");
  productDOM.innerHTML = `<div class="product-wrapper">
    <img src="${img}" alt="${title}" class="img" />
    <div class="product-info">
      <h3>${title}</h3>
      <h5>${company}</h5>
      <span>$${price / 100}</span>
      <div class="colors">
        ${colorList}
      </div>
      <p>
      ${description}
      </p>
      <button class="btn">Add to cart</button>
    </div>`;
};
