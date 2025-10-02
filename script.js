const listContainer = document.getElementById('tasks');
const inputBox = document.getElementById('input-box');

function addTask() {
	let taskName = inputBox.value;
	if (taskName === '') {
		alert("You must write something!");
	} else {
		let li = document.createElement('li');
		li.innerHTML = taskName;
		listContainer.appendChild(li);
		
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}

listContainer.addEventListener("click", function(e){
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");	// create task
		saveData();
	} else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();		//remove task
		saveData();
	}
}, false);

// storing data
function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
	listContainer.innerHTML = localStorage.getItem("data");
}
loadData();