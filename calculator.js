function getInputValue(num) {
	var previousValue = document.getElementById("main-display").value;
	var inputVal = num;
	if (typeof inputVal == 'number')
		var str = inputVal.toString();
	else
		var str = inputVal;
	var outputVal = previousValue + str;
	document.getElementById("main-display").value = outputVal;
}


function equals() {
	var operation = document.getElementById("main-display").value;
	document.getElementById("main-display").value = eval(operation);
}

function totalClear() {
	document.getElementById("main-display").value = "";
}

function clean() {
	var value = document.getElementById("main-display").value;
	val = value.slice(0,-1)
	document.getElementById("main-display").value = val;
}
