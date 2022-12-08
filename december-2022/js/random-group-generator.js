"use strict";


// const students = ['bob', 'steve', 'john', 'paul', 'susan', 'tammy', 'jessica', 'sara', 'nadine', 'tyson', 'jacob', 'veronica', 'andrea', 'titus', 'sammy', 'leo', 'reggie'];




//*****function called with onclick <button>
function createGroups() {
	let classArr = addTo();
	clearField();
	let groups = shuffleArray(classArr);

	const toDoc0 = groups[0].map(group => `<li>${group}</li>`).join(' ');
	document.getElementById('group-list1').innerHTML = "<ul>" + toDoc0 + "</ul>";
	const toDoc1 = groups[1].map(group => `<li>${group}</li>`).join(' ');
	document.getElementById('group-list2').innerHTML = "<ul>" + toDoc1 + "</ul>";
	const toDoc2 = groups[2].map(group => `<li>${group}</li>`).join(' ');
	document.getElementById('group-list3').innerHTML = "<ul>" + toDoc2 + "</ul>";
	const toDoc3 = groups[3].map(group => `<li>${group}</li>`).join(' ');
	document.getElementById('group-list4').innerHTML = "<ul>" + toDoc3 + "</ul>";

	const toDoc4 = groups[4].map(group => `<li>${group}</li>`).join(' ');
	document.getElementById('group-list5').innerHTML = "<ul>" + toDoc4 + "</ul>";
	const toDoc5 = groups[5].map(group => `<li>${group}</li>`).join(' ');
	document.getElementById('group-list6').innerHTML = "<ul>" + toDoc5 + "</ul>";
	const toDoc6 = groups[6].map(group => `<li>${group}</li>`).join(' ');
	document.getElementById('group-list7').innerHTML = "<ul>" + toDoc6 + "</ul>";
	const toDoc7 = groups[7].map(group => `<li>${group}</li>`).join(' ');
	document.getElementById('group-list8').innerHTML = "<ul>" + toDoc7 + "</ul>";

}


//*****takes input from docment and pushes to firstArr
function addTo() {
	let firstArr = [];
	firstArr.push(...document.getElementById('users').value.split(','));
	return firstArr;
}

//*****clears input field in document
function clearField() {
	document.getElementById('users').value = '';
}

//*****event listener for input #numOfGroups
// let numOfGroups = document.getElementById('numOfGroups');
// numOfGroups.addEventListener("input", sizeGroup);

// function sizeGroup() {
// 	let size = numOfGroups.value;
// 	return size;
// }

//*****
function shuffleArray(arr) {
	//**for event listener
	// let sizeHTML = sizeGroup();

	
	//using instead of eventListener
	let sizeHTML = document.getElementById("numOfGroups").value;
 	let groupsArr = [];
	for (let i = arr.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = arr[i];
		arr[i] =arr[j];
		arr[j] = temp;
	}	
	while (arr.length > 0) {
		groupsArr.push(arr.splice(0, sizeHTML));

	}
	return groupsArr;
};





