
// FUNCTIONALITY TO LOAD ALL SCRIPTURES - ALL - ACTIVE - COMPLETED
function loadAllTasks(availableTasks) {
  // Remove the hit message first
	// const hintMessage = document.getElementById("hint-message");
	// const scriptureSpace = document.querySelector(".scripture-space")
	// hintMessage.classList.add("hint-message-appear-disappear");
	// scriptureSpace.classList.add("visibility-on-off");

  // Load all Scriptures
  availableTasks.forEach(task => {
    // Create a Delete Button
	const deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "\u2718";
	
	// Create li element to hold the new task
	let newLiElement = document.createElement("li");
	let newSpanElement = document.createElement("span");
	newSpanElement.textContent = task.content;


	let div = document.createElement("div");
	div.appendChild(deleteBtn);
	newLiElement.appendChild(newSpanElement);
	newLiElement.appendChild(div);
	
	// Add the newly created li element having new task to the list of tasks
	document.getElementById("tasks-container").appendChild(newLiElement);
	
	// Functionality to make the delete button remove the li having a task
	deleteBtn.addEventListener("click", () => {
		document.getElementById("tasks-container").removeChild(newLiElement);
		availableTasks = availableTasks.filter((taskInLoop) => {
					if(taskInLoop.id !== task.id){
						return task;
					}
		})
		// console.log(availableTasks);
		// console.log(availableTasks.length);

		localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));
	})

  })
}

// FUNCTIONALITY TO ADD A SCRIPTURE TASK
const addNewTask = document.getElementById("submitTask");
addNewTask.addEventListener("click",() => {

	// Get the task value entered by the user
	const task = document.getElementById("task").textContent;
	// console.log(task);
	
	// Get the array of tasks from the local storage if any or create a new tasks array
	let availableTasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	if(availableTasks === null) {
		availableTasks = [];
	}

	// Adding new task to the array of tasks
	let taskAsAnObject = {};
	taskAsAnObject.id = new Date().getTime();
	taskAsAnObject.content = task;
	// console.log(taskAsAnObject);
	
	availableTasks.push(taskAsAnObject);
	console.log(availableTasks);
	
	if (task !== ""){
		// Create a Delete Button
		const deleteBtn = document.createElement("button");
		deleteBtn.innerHTML = "\u2718";
		
		// Create li element to hold the new task
		let newLiElement = document.createElement("li");
		let newSpanElement = document.createElement("span")
        newSpanElement.textContent = task;

		let div = document.createElement("div");
		div.appendChild(deleteBtn);
		newLiElement.appendChild(newSpanElement);
		newLiElement.appendChild(div);
		
		// Add the newly created li element having new task to the list of tasks
		document.getElementById("tasks-container").appendChild(newLiElement);
		
		// Functionality to make the delete button remove the li having a task
		deleteBtn.addEventListener("click", () => {
			document.getElementById("tasks-container").removeChild(newLiElement);
			availableTasks = availableTasks.filter((taskInLoop) => {
                        if(taskInLoop.id !== taskAsAnObject.id){
							return task;
						}
			})
			console.log(availableTasks.length);
			console.log(availableTasks);

			localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));
		})

		// Store the new state of the array objects in the local storage
		localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));

	}
	
});

const getAllTasks = () => {
	// console.log("Working!");
	// Remove the hit message first
	const hintMessage = document.getElementById("hint-message");
	hintMessage.classList.add("hint-message-appear-disappear");

	// Start the Load scriptures process
	let numberOfTasks = 0;
	let tasksContainer = document.getElementById("tasks-container");
	tasksContainer.innerHTML = "";

	const availableTasks2 = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	if(availableTasks2 !== null) {
		numberOfTasks = loadAllTasks(availableTasks2);
	}

}


const allTasks = document.getElementById("all");
allTasks.addEventListener("click", getAllTasks);

// FUNCTIONALITY TO LOAD ALL TASKS WHEN APP STARTS
function loadTasksOnStart() {
	console.log("FUNCTIONALITY TO LOAD ALL TASKS WHEN APP STARTS IS WORKING")
	let availableTasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	if(availableTasks !== null) {
		getAllTasks();
	}
}


// CHANGE CHAPTER COLORS FUNCTIONALITY - IN PROCESS
// let scriptureToColorText = document.getElementById("task").textContent;

// function changeChapterNumbers(scriptureToColor) {
// 	console.log(scriptureToColor);
// 	let chaptersSection = scriptureToColor.split(".");

// 	let chapterNumbers = chaptersSection[0];
// 	console.log(chapterNumbers);

// 	chapterNumbers.style.color = "red";
// }

// changeChapterNumbers(scriptureToColorText);
