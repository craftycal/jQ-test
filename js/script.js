// localStorage.setItem("cart", JSON.stringify( [] ));

// if shopping cart does not exist in local storage
if( localStorage.getItem("cart") == null) {

	//create cart
	localStorage.setItem("cart", JSON.stringify( [] ));
}

// extract cart and convert back to object
var cart = JSON.parse( localStorage.getItem("cart") );

//show contents of the cart
console.log( cart );

// show the number of items in the cart
updateCartDisplay();


var addToCartButton =document.querySelectorAll(".add-to-cart");

// add click event 
for(var i=0; i<addToCartButton.length; i++) {

	addToCartButton[i].onclick = addToCart;
}


function addToCart(){
	var productName = this.dataset.name;
	var productPrice = parseFloat(this.dataset.price);

	var product = {
		name: productName,
		price: productPrice
	}	

	cart.push(product);

	localStorage.setItem("cart", JSON.stringify(cart));

	console.log(cart);

	updateCartDisplay();
}


// listen for clicks on clear cart button
document.querySelector("#clear-cart").onclick = function(){

	localStorage.setItem("cart", JSON.stringify( [] ));

	cart = [];

	updateCartDisplay();
};

function updateCartDisplay(){
	// get cart contents
	var cart = JSON.parse( localStorage.getItem('cart') );

	//if total is 0
	if (cart.length == 0 ) {
	var text = '';
	} else {
		var text = cart.length;
	}

	//count cart contents & display number on screen
	document.querySelector("#total-cart").innerHTML = cart.length;

	showCartTable();
}

function showCartTable(){
	//
	var container = document.querySelector("#cart-table");
	//
	var table = document.createElement("table");
	table.setAttribute('border', '1')
	// hold the headings
	var headingRow = document.createElement("tr");
	// create name heading
	var nameHeading = document.createElement("th");
	nameHeading.innerHTML = "Product Name";
	// price heading
	var priceHeading = document.createElement("th");
	priceHeading.innerHTML = "Price";
	// add heading to headings row
	headingRow.appendChild(nameHeading);
	headingRow.appendChild(priceHeading);

	table.appendChild(headingRow);

	// show price total 
	var grandTotal = 0;

	//loop over all the cart items
	for(var i=0; i<cart.length; i++) {
		// get price of produce ad add to grand total
		grandTotal += cart[i].price;

		//creat row for this product
		var row = document.createElement("tr");
		// create the product name date element
		var nameTD = document.createElement("td");
		// create the price row
		var priceTD = document.createElement("td");
		// add date to td elements
		nameTD.innerHTML = cart[i].name;
		priceTD.innerHTML = cart[i].price;

		// add td elements to the row
		row.appendChild(nameTD);
		row.appendChild(priceTD);

		// add row to table
		table.appendChild(row);
	}

	console.log(grandTotal);

	var grandTotalRow = document.createElement("tr");
	var grandTotalTD = document.createElement("td");
	var fillerTD = document.createElement("td");

	grandTotalTD.innerHTML = "Total: $" +grandTotal;

	grandTotalRow.appendChild(fillerTD);

	grandTotalRow.appendChild(grandTotalTD);

	table.appendChild(grandTotalRow);

	container.innerHTML = "";
	
	container.appendChild(table);

}





// JQ - acordian and login
$(document).ready(function(){


	$(".control").click(function(){
		$(this).next(".box").slideToggle({"display" : "block"});
	});

	$("#loginclick").click(function(){
		$("#login").slideToggle({"display" : "block"});
	});	

});//document


