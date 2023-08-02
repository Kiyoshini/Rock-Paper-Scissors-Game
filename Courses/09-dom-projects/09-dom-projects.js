function calculateTotal () {
	const inputElement = document.getElementById("js-cost-input");
	let cost = Number(inputElement.value);

	if (cost < 40) {
		cost = cost + 10;
	} 

	document.querySelector('.js-total-cost').innerHTML = `$${cost}`
}

function handlCostKeydown (event) {
	if (event.key === 'Enter') {
		calculateTotal()
	}
}