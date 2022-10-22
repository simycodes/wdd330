availableTasks = [];
console.log(availableTasks);
// Get tasks array from local storage if its available/already set
const tasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
// Check if it contains data by checking its length
// console.log(tasks.length);
console.log("Local Storage Working!!");

if (tasks.length !== 0){
   availableTasks = tasks;
   console.log(tasks);
   console.log("Above are tasks from local storage");
   // availableTasks = [];
   // localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));
}

// ==============

function getTasksFromLocalStorage() {
   // Get tasks array from local storage if its available/already set
   const availableTasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
   localStorage.setItem('availableTasksInLocalStorage', JSON.stringify(availableTasks));
   // Check if it contains data by checking its length
    if (availableTasks.length !== 0){
       console.log(availableTasks);
       console.log("Above are tasks from local storage");
	   return tasks;
    }
	else {
		return 0;
	}
}



// =============

// Get the array of tasks from the local storage if any or create a new tasks array
	let availableTasks = JSON.parse(localStorage.getItem('availableTasksInLocalStorage'));
	if(availableTasks === null) {
		availableTasks = [];
	}


