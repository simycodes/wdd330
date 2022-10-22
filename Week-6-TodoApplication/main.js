
// FUNCTIONALITY TO LOAD ALL TASKS - ALL - ACTIVE - COMPLETED
function loadAllTasks(availableTasks) {
  availableTasks.forEach(task => {
    // Create a Delete Button
	const deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "\u274C";

	//Create a Mark Complete Task Button
	const markCompleteBtn = document.createElement("button");
	markCompleteBtn.innerHTML = "Mark as Complete";
	
	// Create li element to hold the new task
	let newLiElement = document.createElement("li");
	let newSpanElement = document.createElement("span")
	newSpanElement.textContent = task.content;
	// let newSpanElement2 = document.createElement("span")
	// newSpanElement2.textContent = task.completed;

	// Check if each task is completed or not 
	if(task.completed === true){
		markCompleteBtn.innerHTML = "Done!click to revert";
		newSpanElement.classList.add("task-completed")
	}


	let div = document.createElement("div");
	div.appendChild(markCompleteBtn);
	div.appendChild(deleteBtn);
	newLiElement.appendChild(newSpanElement);
	newLiElement.appendChild(div);
	// old code here
	// newLiElement.appendChild(newSpanElement);
	// newLiElement.appendChild(markCompleteBtn);
	// newLiElement.appendChild(deleteBtn);
	
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

	// Functionality to make the markCompleteBtn to cross a task
	markCompleteBtn.addEventListener("click", () => {
		newSpanElement.classList.toggle("task-completed");
		
		if(markCompleteBtn.innerHTML === "Mark as Complete"){
			markCompleteBtn.innerHTML = "Done!click to revert";
			task.completed = true;
			console.log(task);

			// Update the new change - when marked complete or incomplete
			availableTasks = availableTasks.map((taskInLoop) => {
                if(taskInLoop.id === task.id){
					taskInLoop.completed = true;
				}
				return taskInLoop
			})
			console.log(availableTasks.length);
			console.log(availableTasks);

			localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));

		}
		else {
			markCompleteBtn.innerHTML = "Mark as Complete";
			task.completed = false;
			console.log(task);

			// Update the new change - when marked complete or incomplete
			availableTasks = availableTasks.map((taskInLoop) => {
                if(taskInLoop.id === task.id){
					taskInLoop.completed = false;
				}
				return taskInLoop;
			})
			console.log(availableTasks.length);
			console.log(availableTasks);

			localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));

		}
	})

	//clearing up the input area
	document.getElementById("task").value = "";

	// bringing the focus to the input area
	const TaskEntrySpace = document.getElementById("task");
	TaskEntrySpace.focus();

  })
  return availableTasks.length;
}

// FUNCTIONALITY TO ADD A NEW TASK
const addNewTask = document.getElementById("submitTask");
addNewTask.addEventListener("click",() => {
	// Get the task value entered by the user
	const task = document.getElementById("task").value;

	// Get the array of tasks from the local storage if any or create a new tasks array
	let availableTasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	if(availableTasks === null) {
		availableTasks = [];
	}

	// Adding new task to the array of tasks
	let taskAsAnObject = {};
	taskAsAnObject.id = new Date().getTime();
	taskAsAnObject.content = task;
	taskAsAnObject.completed = false;
	// console.log(taskAsAnObject);
	
	availableTasks.push(taskAsAnObject);
	console.log(availableTasks);
	
	if (task !== ""){
		// Create a Delete Button
		const deleteBtn = document.createElement("button");
		deleteBtn.innerHTML = "\u274C";

		//Create a Mark Complete Task Button
		const markCompleteBtn = document.createElement("button");
		markCompleteBtn.innerHTML = "Mark as Complete";
		
		// Create li element to hold the new task
		let newLiElement = document.createElement("li");
		let newSpanElement = document.createElement("span")
        newSpanElement.textContent = task;

		let div = document.createElement("div");
		div.appendChild(markCompleteBtn);
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

		// Functionality to make the markCompleteBtn to cross a task
		markCompleteBtn.addEventListener("click", () => {
		newSpanElement.classList.toggle("task-completed");

		if(markCompleteBtn.innerHTML === "Mark as Complete"){
			markCompleteBtn.innerHTML = "Done!click to revert";
			task.completed = true;
			console.log(task);

			// Update the new change - when marked complete or incomplete
			availableTasks = availableTasks.map((taskInLoop) => {
                if(taskInLoop.id === taskAsAnObject.id){
					taskInLoop.completed = true;
				}
				return taskInLoop
			})
			console.log(availableTasks.length);
			console.log(availableTasks);

			localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));
		}
		else {
				markCompleteBtn.innerHTML = "Mark as Complete";
				task.completed = false;
				console.log(task);

				// Update the new change - when marked complete or incomplete
				availableTasks = availableTasks.map((taskInLoop) => {
					if(taskInLoop.id === taskAsAnObject.id){
						taskInLoop.completed = false;
					}
					return taskInLoop;
				})
				console.log(availableTasks);
				console.log(availableTasks);

				localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));
		    }
	     })

		// Store the new state of the array objects in the local storage
		localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));

		//clearing up the input area
		document.getElementById("task").value = "";

		// bringing the focus to the input area
		const TaskEntrySpace = document.getElementById("task");
		TaskEntrySpace.focus();
	}
	
});

const getAllTasks = () => {
	// console.log("Working!");
	let numberOfTasks = 0;
	let tasksContainer = document.getElementById("tasks-container");
	tasksContainer.innerHTML = "";

	const availableTasks2 = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	if(availableTasks2 !== null) {
		numberOfTasks = loadAllTasks(availableTasks2);
	}
	
	console.log(numberOfTasks);

	let numberOfTasksLeft = document.getElementById("numberOfTasksLeft");
	numberOfTasksLeft.innerHTML = `${numberOfTasks} tasks left`;
}

const getActiveTasks = () => {
	console.log("Working 2");
	let numberOfTasks = 0;
	let activeTasks = [];
	let tasksContainer = document.getElementById("tasks-container");
	tasksContainer.innerHTML = "";

	const availableTasks2 = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	if(availableTasks2 !== null) {
		activeTasks = availableTasks2.filter((task)=>{
			if(task.completed === false){
				return task;
			}
		})
		numberOfTasks = loadAllTasks(activeTasks);
	}
	
	console.log(numberOfTasks);
	let numberOfTasksLeft = document.getElementById("numberOfTasksLeft");
	numberOfTasksLeft.innerHTML = `${numberOfTasks} tasks left`;
}

const getCompletedTasks = () => {
	console.log("Working 3");
	let numberOfTasks = 0;
	let completedTasks = [];
	let tasksContainer = document.getElementById("tasks-container");
	tasksContainer.innerHTML = "";

	const availableTasks2 = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	if(availableTasks2 !== null) {
		completedTasks = availableTasks2.filter((task)=>{
			if(task.completed === true){
			  return task;
			}
		})
		numberOfTasks = loadAllTasks(completedTasks);
	}
	
	console.log(numberOfTasks);
	let numberOfTasksLeft = document.getElementById("numberOfTasksLeft");
	numberOfTasksLeft.innerHTML = `${numberOfTasks} Tasks Completed`;
}

const allTasks = document.getElementById("all");
allTasks.addEventListener("click", getAllTasks);

const activeTasks = document.getElementById("active");
activeTasks.addEventListener("click", getActiveTasks);

const completedTasks = document.getElementById("completed");
completedTasks.addEventListener("click", getCompletedTasks);

// FUNCTIONALITY TO LOAD ALL TASKS WHEN APP STARTS
function loadTasksOnStart() {
	console.log("FUNCTIONALITY TO LOAD ALL TASKS WHEN APP STARTS IS WORKING")
	let availableTasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	if(availableTasks !== null) {
		getAllTasks();
	}
}

loadTasksOnStart();