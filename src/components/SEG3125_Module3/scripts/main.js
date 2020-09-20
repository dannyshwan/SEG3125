
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {
	
		
	// obtain a reduced list of products based on restrictions
	let vegetarian = document.getElementById("Vegetarian").checked;
	let organicOnly = document.getElementById("yes").checked;
	let glutenFree = document.getElementById("GlutenFree").checked;
	
	var optionArray = restrictListProducts(products, vegetarian, glutenFree, organicOnly);
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	let dairy = [];
	let bakery = [];
	let fruits = [];
	let vegetables = [];
	let seafood = [];
	let meat = [];

	for(i = 0; i < optionArray.length; i++){

		switch(optionArray[i][2]){
			case "dairy":
				dairy.push(optionArray[i]);
				break;
			case "bakery":
				bakery.push(optionArray[i]);
				break;
			case "fruit":
				fruits.push(optionArray[i]);
				break;
			case "vegetable":
				vegetables.push(optionArray[i]);
				break;
			case "seafood":
				seafood.push(optionArray[i]);
				break;
			case "meat":
				meat.push(optionArray[i]);
				break;
		}
	}

	if(bakery && !glutenFree){
		document.getElementById("bakery_section").style.display = "block";
		fillCategories(bakery, "bakery");
	}
	else{
		document.getElementById("bakery_section").style.display = "none";
	}

	if(dairy){
		document.getElementById("dairy_section").style.display = "block";
		fillCategories(dairy, "dairy");
	}
	else{
		document.getElementById("dairy_section").style.display = "none";
	}

	if(fruits){
		document.getElementById("fruit_section").style.display = "block";
		fillCategories(fruits, "fruit");
	}
	else{
		document.getElementById("fruit_section").style.display = "none";
	}

	if(vegetables){
		document.getElementById("vegetable_section").style.display = "block";
		fillCategories(vegetables, "vegetable");
	}
	else{
		document.getElementById("vegetable_section").style.display = "none";
	}

	if(seafood && !vegetarian){
		document.getElementById("seafood_section").style.display = "block";
		fillCategories(seafood, "seafood");
	}
	else{
		document.getElementById("seafood_section").style.display = "none";
	}

	if(meat && !vegetarian){
		document.getElementById("meat_section").style.display = "block";
		fillCategories(meat, "meat");
	}
	else{
		document.getElementById("meat_section").style.display = "none";
	}
}

function fillCategories(arr, el){
	
	temp = document.getElementById(el);
	temp.innerHTML = "";

	for (i = 0; i < arr.length; i++) {
			
		var productName = arr[i][0];
		var productprice = arr[i][1];

		let img = document.createElement("img");
		img.src = arr[i][3];
		temp.appendChild(img);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode('\u00A0\u00A0'+ `${productName} - $${productprice}/ea` + '\u00A0\u00A0'));
		temp.appendChild(label);

		// create the checkbox and add in HTML DOM
		var quantity = document.createElement("input");
		quantity.type = "number";
		quantity.name = "product";
		quantity.value = "0";
		quantity.id = productName;
		quantity.min = 0;
		quantity.max = 10;
		temp.appendChild(quantity);
		
		// create a breakline node and add in HTML DOM
		temp.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	var productQuantity = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].value > 0) {
			let quantity = ele[i].value > 10 ? 10:ele[i].value;

			para.appendChild(document.createTextNode(`${ele[i].id} x ${quantity}`));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].id);
			productQuantity.push(quantity);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts, productQuantity)));
		
}

