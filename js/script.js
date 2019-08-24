
function generateList() {

	let originalList = document.getElementById("original_list").value;

	console.log(originalList);

	let arrayList = originalList.split("\n");

	arrayList = arrayList.filter((x) => {
  		return x != "";
	});

	console.log(arrayList);


	let generatedList = "";

	let prefix = "";
	for (let i = 0; i < arrayList.length; i++) {
		if (arrayList[i].substring(0, 5) == "Stol " || arrayList[i].slice(-5) == "Stol.") {
			prefix = arrayList[i];
		} else {
			generatedList += prefix + "\t" + arrayList[i] + "\n";
		}
	}

	document.getElementById("generated_list").value = generatedList;

}