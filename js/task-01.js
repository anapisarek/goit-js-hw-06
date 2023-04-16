const itemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((elem) => {
    console.log(`Category: ${elem.querySelector("h2").textContent}`);
    console.log(`Elements: ${elem.getElementsByTagName("li").length}`);
});