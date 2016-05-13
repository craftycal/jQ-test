// if shopping cart does not exist in local storage
if( localStorage.getItem("cart") == null) {

	//create cart
	localStorage.setItem("cart", JSON.stringify( [] ));
}

// extract cart and convert back to object
var cart = JSON.parse( localStorage.getItem("cart") );


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

}