let allProducts = [];
let currentCategory = "Tất cả sản phẩm";
let cartQuantity = 0;
const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Error HTTP");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
};
const handleFilterCategory = (categoryName) => {
  currentCategory = categoryName;
  console.log(categoryName);
  let filteredProducts = [];

  if (categoryName === "Tất cả sản phẩm") {
    filteredProducts = allProducts;
    console.log("all", allProducts);
  } else {
    filteredProducts = allProducts.filter((p) => p.category === categoryName);
    console.log("filtered", filteredProducts);
  }

  renderProducts(filteredProducts);
  renderCategories();
};
const addToCart = () => {
  cartQuantity += 1;
  document.getElementById("cart-count").innerText = cartQuantity;
};
const renderProducts = (productsToRender) => {
  const container = document.getElementById("product-list");
  const countText = document.getElementById("product-count");

  countText.innerText = `Hiển thị ${productsToRender.length} sản phẩm`;
  container.innerHTML = "";

  productsToRender.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group";

    const categorySpan = document.createElement("span");
    categorySpan.className = "text-xs text-gray-400 capitalize";
    categorySpan.innerText = product.category;

    const imgContainer = document.createElement("div");
    imgContainer.className =
      "w-full h-48 flex items-center justify-center my-4 p-2 bg-white";
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.className =
      "max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300";
    imgContainer.appendChild(img);

    const productTitle = document.createElement("h3");
    productTitle.className =
      "font-medium text-gray-800 text-sm line-clamp-2 h-10 mb-2 mt-auto";
    productTitle.innerText = product.title;

    const productRatingContainer = document.createElement("div");
    productRatingContainer.className =
      "flex items-center gap-1 text-xs text-gray-500 mb-4";
    const spanStarIcon = document.createElement("span");
    spanStarIcon.className = "text-yellow-400";
    const starIcon = document.createElement("i");
    starIcon.className = "fa-solid fa-star text-yellow-400";
    spanStarIcon.appendChild(starIcon);
    const productRating = document.createElement("span");
    productRating.className = "font-semibold text-gray-700";
    productRating.innerText = product.rating.rate;
    productRatingContainer.append(spanStarIcon, starIcon, productRating);

    const productPriceContainer = document.createElement("div");
    productPriceContainer.className = "flex items-center justify-between";
    const spanPrice = document.createElement("span");
    spanPrice.className = "text-lg font-bold text-indigo-600";
    spanPrice.innerText = product.price;
    productPriceContainer.appendChild(spanPrice);

    const btnToCart = document.createElement("button");
    btnToCart.className =
      "p-2.5 bg-gray-900 text-white rounded-xl hover:bg-indigo-600 transition-colors";
    const cartIcon = document.createElement("i");
    cartIcon.className = "fa-solid fa-cart-arrow-down";
    btnToCart.appendChild(cartIcon);
    productPriceContainer.appendChild(btnToCart);

    btnToCart.addEventListener("click", addToCart);
    card.append(
      categorySpan,
      imgContainer,
      productTitle,
      productRatingContainer,
      productPriceContainer,
    );
    container.appendChild(card);
  });
};
const renderCategories = () => {
  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = "";

  const uniqueCategories = [...new Set(allProducts.map((p) => p.category))];
  const createCategoryElement = (categoryName) => {
    const count =
      categoryName === "Tất cả sản phẩm"
        ? allProducts.length
        : allProducts.filter((p) => p.category === categoryName).length;
    const isActive = categoryName === currentCategory;
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = isActive
      ? "w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm bg-indigo-50 text-indigo-600 font-medium"
      : "w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50 capitalize transition-colors";
    const nameSpan = document.createElement("span");
    nameSpan.innerText = categoryName;

    const countSpan = document.createElement("span");
    countSpan.className = isActive
      ? "text-xs px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-700"
      : "text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500";
    countSpan.innerText = count;

    button.append(nameSpan, countSpan);
    li.appendChild(button);

    button.addEventListener(`click`, () => {
      handleFilterCategory(categoryName);
    });
    return li;
  };
  categoryList.appendChild(createCategoryElement("Tất cả sản phẩm"));
  uniqueCategories.forEach((category) => {
    categoryList.appendChild(createCategoryElement(category));
  });
};

const initApp = async () => {
  const data = await getProducts();

  if (data.length > 0) {
    allProducts = data;
    renderProducts(allProducts);
    renderCategories();
  } else {
    document.getElementById("product-list").innerHTML =
      "<p class='col-span-full text-center text-gray-500 py-10'>Không có sản phẩm nào để hiển thị.</p>";
  }
};

initApp();
