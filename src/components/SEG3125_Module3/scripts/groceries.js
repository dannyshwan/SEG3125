	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

/**
 * NOTE: All images belong to Real Canadian Superstore
 */
var products = [
	{
		name: "Apples",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "fruit",
		image: "./assets/apple.png",
		price: 1.50
	},
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "vegetable",
		image: "./assets/broccoli.png",
		price: 1.99
	},
	{
		name: "Eggs",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "dairy",
		image: "./assets/eggs.png",
		price: 2.25
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		category: "bakery",
		image: "./assets/bread.png",
		price: 2.35
	},
	{
		name: "Baguette",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		category: "bakery",
		image: "./assets/baguette.png",
		price: 3.49
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "dairy",
		image: "./assets/milk.png",
		price: 4.35
	},
	{
		name: "Avocados",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "vegetable",
		image: "./assets/avocado.png",
		price: 4.97
	},
	{
		name: "Raspberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fruit",
		image: "./assets/raspberry.png",
		price: 6.75
	},
	{
		name: "Pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		image: "./assets/pork.png",
		price: 7.80
	},
	{
		name: "Lamb",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "meat",
		image: "./assets/lamb.png",
		price: 9.25
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "seafood",
		image: "./assets/salmon.png",
		price: 10.00
	},
	{
		name: "Cake",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "bakery",
		image: "./assets/cake.png",
		price: 13.45
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, vegetarian, glutenFree, organicOnly) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if (organicOnly && !prods[i].organic){
			continue;
		}

		if(!vegetarian && !glutenFree){
			product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
		}

		let veg = vegetarian && prods[i].vegetarian;
		let glut = glutenFree && prods[i].glutenFree;

		if (vegetarian && glutenFree){
			if(prods[i].glutenFree && prods[i].vegetarian){
				product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
			}
		}
		else if (veg){
			product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
		}
		else if (glut){
			product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts, productQuantity) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		let index = chosenProducts.indexOf(products[i].name)

		if (index > -1){
			totalPrice += products[i].price * productQuantity[index];
		}
	}
	return Math.round(totalPrice * 100) / 100;
}
