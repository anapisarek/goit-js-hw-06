const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
for (const element of items) {
    console.log(`Category: ${element.children[0].innerText}`);
  
    console.log(`Elements: ${element.children[1].children.length}`);
  }