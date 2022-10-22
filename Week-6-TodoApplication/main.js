
// const availableTasks = [
//     {
// 	  id:new Date().getTime(),
//       content: "Eating",
// 	  completed: false,
//     },
//     {
// 	  id:new Date().getTime(),
//       content: "Coding",
// 	  completed: false,
//     },
//      {
// 	  id:new Date().getTime(),
//       content: "Studying",
// 	  completed: false,
//     }
// ]

// Creating an empty array to hold all the tasks (as objects) that will be entered by the
// user

// This saves the availableTasks array as a JSON string using the string 
// 'availableTasksInLocalStorage' // as the key.
// localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));

// Retrieving availableTasks as a JavaScript object:
// availableTasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
// console.log(booksFromLocalStorage);

// function getTasksFromLocalStorage() {
//    // Get tasks array from local storage if its available/already set
//    const availableTasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
//    localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));
//    // Check if it contains data by checking its length
//     if (availableTasks.length !== 0){
//        console.log(availableTasks);
//        console.log("Above are tasks from local storage");
// 	   return tasks;
//     }
// 	else {
// 		return 0;
// 	}
// }

//let availableTasks = getTasksFromLocalStorage();

availableTasks = [];
console.log(availableTasks)
// Get tasks array from local storage if its available/already set
const tasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
// Check if it contains data by checking its length
console.log(tasks.length);
console.log("Local Storage Working!!");

if (tasks.length !== 0){
   availableTasks = tasks;
   console.log(tasks);
   console.log("Above are tasks from local storage");
   // availableTasks = [];
   // localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));
}

// FUNCTIONALITY TO LOAD ALL TASKS WHEN APP STARTS
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

// loadAllTasks(availableTasks);

// FUNCTIONALITY TO ADD A NEW TASK
const addNewTask = document.getElementById("submitTask");
addNewTask.addEventListener("click",() => {
	const task = document.getElementById("task").value;

	// Adding new task to the array of tasks
	let taskAsAnObject = {};
	taskAsAnObject.id = new Date().getTime();
	taskAsAnObject.content = task;
	taskAsAnObject.completed = false;
	console.log(taskAsAnObject);
	
	availableTasks.push(taskAsAnObject);
	console.log(availableTasks);
	// Store the new state of the array objects in the local storage
	localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));
	
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

		//clearing up the input area
		document.getElementById("task").value = "";

		// bringing the focus to the input area
		const TaskEntrySpace = document.getElementById("task");
		TaskEntrySpace.focus();
	}
	
});

const getAllTasks = () => {
	console.log("Working!");
	let tasksContainer = document.getElementById("tasks-container");
	tasksContainer.innerHTML = "";

	const availableTasks2 = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	let numberOfTasks = loadAllTasks(availableTasks2);
	console.log(numberOfTasks);

	let numberOfTasksLeft = document.getElementById("numberOfTasksLeft");
	numberOfTasksLeft.innerHTML = `${numberOfTasks} tasks left`;
}

const getActiveTasks = () => {
	console.log("Working 2");
	const availableTasks2 = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	let activeTasks = availableTasks2.filter((task)=>{
         if(task.completed === false){
			return task;
		 }
	})
	let tasksContainer = document.getElementById("tasks-container");
	tasksContainer.innerHTML = "";

	let numberOfTasks = loadAllTasks(activeTasks);

	let numberOfTasksLeft = document.getElementById("numberOfTasksLeft");
	numberOfTasksLeft.innerHTML = `${numberOfTasks} tasks left`;
}

const getCompletedTasks = () => {
	const availableTasks2 = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	console.log("Working 3");
	let completedTasks = availableTasks2.filter((task)=>{
         if(task.completed === true){
			return task;
		 }
	})
	let tasksContainer = document.getElementById("tasks-container");
	tasksContainer.innerHTML = "";

	let numberOfTasks = loadAllTasks(completedTasks);

	let numberOfTasksLeft = document.getElementById("numberOfTasksLeft");
	numberOfTasksLeft.innerHTML = `${numberOfTasks} Tasks Completed`;
}

getAllTasks();
const allTasks = document.getElementById("all");
allTasks.addEventListener("click", getAllTasks);

const activeTasks = document.getElementById("active");
activeTasks.addEventListener("click", getActiveTasks);

const completedTasks = document.getElementById("completed");
completedTasks.addEventListener("click", getCompletedTasks);


// document.getElementById("submitTask").addEventListener("click",function(){
// 	const task = document.getElementById("task").value;
// 	//console.log(favoriteChapterName);
	
// 	if (task !== ""){
		
// 		const deleteBtn = document.createElement("button");
// 		deleteBtn.innerHTML = "\u274C";
		
// 		let newCreatedLiElement = document.createElement("li")
// 		newCreatedLiElement.textContent = task;
// 		newCreatedLiElement.appendChild(deleteBtn);
		
// 		document.getElementById("list-favorite-chapters").appendChild(newCreatedLiElement);
		
// 		//functionality to make the delete button remove the li element-favorite chapter
// 		deleteBtn.addEventListener("click",function(){
// 			document.getElementById("list-favorite-chapters").removeChild(newCreatedLiElement);
// 		})

// 		//clearing up the input area
// 		document.getElementById("task").value = "";

// 		//bringing focus to the input area
// 		const favChapterNameFocusArea = document.getElementById("task");
// 		favChapterNameFocusArea.focus();
// 	}
	
// });
