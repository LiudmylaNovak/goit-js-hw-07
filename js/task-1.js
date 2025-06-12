const list = document.querySelector("#categories");
const item = list.querySelectorAll(".item");
const category = list.querySelectorAll(".item-heading");
console.log(`Number of categories: ${item.length}`);
Array.from(item).forEach((element) => {
  console.log(
    `Category: ${element.querySelector(".item-heading").textContent}`
  );
  console.log(`Elements: ${element.querySelectorAll("li .item-text").length}`);
});
