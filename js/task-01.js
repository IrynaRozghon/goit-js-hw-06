const categoryItems = document.querySelectorAll('.item');
console.log(categoryItems);

const numberItem = categoryItems.length;
console.log('Number of categories:', numberItem );

for ( const categoryItem of categoryItems) {
    console.log('Category:', categoryItem.querySelector('h2').textContent);
    console.log('Elements:', categoryItem.querySelectorAll('li').length);
}