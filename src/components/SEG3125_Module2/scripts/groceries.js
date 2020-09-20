	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Apples",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.50
	},
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Eggs",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.25
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "Baguette",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 3.49
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.35
	},
	{
		name: "Avocados",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.97
	},
	{
		name: "Spaghetti",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 5.45
	},
	{
		name: "Raspberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 6.75
	},
	{
		name: "Pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 7.80
	},
	{
		name: "Lamb",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.25
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
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
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if (vegetarian && glutenFree){

		}

		let veg = vegetarian && prods[i].vegetarian;
		let glut = glutenFree && prods[i].glutenFree;

		if (vegetarian && glutenFree){
			if(prods[i].glutenFree && prods[i].vegetarian){
				product_names.push([prods[i].name, prods[i].price]);
			}
		}
		else if (veg){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if (glut){
			product_names.push([prods[i].name, prods[i].price]);
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
