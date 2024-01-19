const watchProductsList = [
  {
    id: 1,
    title: "Exquisite Watches",
    titleInfo: "Gold Luxury, ",
    titleHighlight: "Choose Us",
    description:
      "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
    price: "$499.00",
    watchImgUrl: "./images/Group 4.png",
    mainBgColor: "linear-gradient(106deg, #F4A764 -2.93%, #FFDEC2 72.14%)",
  },
  {
    id: 2,
    title: "Dainty Timepieces",
    titleInfo: "Silver Luxury, ",
    titleHighlight: "Choose Us",
    description:
      "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
    price: "$469.00",
    watchImgUrl: "./images/Group 5.png",
    mainBgColor: "linear-gradient(106deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)",
  },
  {
    id: 3,
    title: "Elegant Timepieces",
    titleInfo: "Choose Luxury, ",
    titleHighlight: "Choose Us",
    description:
      "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
    price: "$529.00",
    watchImgUrl: "./images/Group 6.png",
    mainBgColor: "linear-gradient(106deg, #30A357 -2.93%, #75E39A 72.14%)",
  },
  {
    id: 4,
    title: "Refined Timepieces",
    titleInfo: "Choose Luxury, ",
    titleHighlight: "Choose Us",
    description:
      "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
    price: "$599.00",
    watchImgUrl: "./images/Group 7.png",
    mainBgColor: "linear-gradient(106deg, #F24F4F -2.93%, #FFA895 72.14%)",
  },
];

let mainHomePageSectionEl = document.querySelector("#homepageSection");
let sliderMainSection = document.querySelector("#sliderMainSection");
let splideList = document.querySelector("#splide__list");
let contentSection = document.querySelector(".contentSection");

function renderMainWatchSection(eachProduct, index) {
  contentSection.innerHTML = `
  <h1 id="watch-title">${eachProduct.title}</h1>
  <p id="watch-title-info">${eachProduct.titleInfo}
  <span id="watch-title-highlight">${eachProduct.titleHighlight}</span>
  </p>
  <p class="watch-title-description">${eachProduct.description}
  </p>
  <p class="watch-price">${eachProduct.price}</p>
  <img class="social-img" id="socialImg1" src="./images/social media.png" />
    `;
}

const splide = new Splide(".splide", {
  pagination: false,
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide");
  splide.on("moved", function (index) {
    mainHomePageSectionEl.style.background =
      watchProductsList[index].mainBgColor;
    mainHomePageSectionEl.style.transition = "all 1s ease";
    renderMainWatchSection(watchProductsList[index], index);
  });
  splide.mount();
});
