import "../css/about.css";
import houses from "../data/houses.js";

import refs from "./refs.js";
const { about } = refs;

const aboutTitle = document.createElement("h2");
about.appendChild(aboutTitle);

const housesList = document.createElement("ul");
housesList.classList.add("housesList");

function createItem(array) {
  const li = array.map((house) => {
    const { name, picture, price } = house;

    const houseItem = document.createElement("li");
    houseItem.classList.add("houseItem");

    const houseName = document.createElement("h3");
    houseName.textContent = name;

    const pictures = picture.map((url) => {
      const houseImage = document.createElement("img");
      houseImage.setAttribute("src", url);
      houseImage.setAttribute("width", "200");
      return houseImage;
    });

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("imageWrapper");
    imageContainer.append(...pictures);
    const housePrice = document.createElement("p");
    housePrice.textContent = `${price}$`;
    houseItem.append(houseName, imageContainer, housePrice);
    return houseItem;
  });
  return li;
}

const a = createItem(houses);
housesList.append(...a);
about.append(housesList);
