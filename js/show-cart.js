if( localStorage.getItem("cart") == null) {

	//create cart
	localStorage.setItem("cart", JSON.stringify( [] ));
}

// extract cart and convert back to object
var cart = JSON.parse( localStorage.getItem("cart") );

updateCartDisplay();


function updateCartDisplay() {
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

document.querySelector("#clear-cart").onclick = function(){

	localStorage.setItem("cart", JSON.stringify( [] ));

	cart = [];

	updateCartDisplay();
};
