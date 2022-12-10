
// FUNCTIONALITY TO LOAD ALL SCRIPTURES 
function loadScriptures(scripturesInLocalStorage) {

  // Load all Scriptures
  scripturesInLocalStorage.forEach(scripture => {
    // Create a Delete Button
	console.log(scripturesInLocalStorage);
	const deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "\u2718";
	
	// Create li element to hold the new task
	let newLiElement = document.createElement("li");
	let newSpanElement = document.createElement("span");
	newSpanElement.textContent = scripture.content;

	let div = document.createElement("div");
	div.appendChild(deleteBtn);
	newLiElement.appendChild(newSpanElement);
	newLiElement.appendChild(div);
	
	// Add the newly created li element having new scripture to the list of scriptures
	document.getElementById("scripture-container").appendChild(newLiElement);
	
	// Functionality to make the delete button remove the li having a scripture
	deleteBtn.addEventListener("click", () => {
		document.getElementById("scripture-container").removeChild(newLiElement);
		scripturesInLocalStorage = scripturesInLocalStorage.filter((scriptureInLoop) => {
					if(scriptureInLoop.id !== scripture.id){
						return scripture;
					}
		})
		// console.log(scripturesInLocalStorage);
		// console.log(scripturesInLocalStorage.length);

		localStorage.setItem('scripturesInLocalStorage', JSON.stringify(scripturesInLocalStorage));
	})

  })
}

// FUNCTIONALITY TO ADD A SCRIPTURE TASK
const addScripture = document.getElementById("addScripture");
addScripture.addEventListener("click",() => {
	// Get the scripture value entered by the user
	const scripture = document.getElementById("scripture").textContent;
	// console.log(scripture);

	// Check if the scripture is empty
	if(scripture.length == 0 || scripture === undefined) {
		// console.log("nothing");
		// Create li element to hold a message saying get scripture first then add to favorites
		let messageContainer = document.createElement("div");
		let newSpanElement = document.createElement("span");
        newSpanElement.textContent = "No Scripture to add. Press Get Scripture! and then press Add as Favorite.  -- Happy Reading! --";
		messageContainer.appendChild(newSpanElement);

		// Display the message to the user
		document.getElementById("scripture-container").appendChild(messageContainer);
	}
	else {
		// Get the array of scriptures from the local storage if any or create a new scripture array
		let scripturesInLocalStorage = JSON.parse(localStorage.getItem('scripturesInLocalStorage'));
		if(scripturesInLocalStorage === null) {
			scripturesInLocalStorage = [];
		}
		

		// Adding new task to the array of tasks
		let scriptureAsAnObject = {};
		scriptureAsAnObject.id = new Date().getTime();
		scriptureAsAnObject.content = scripture;
		console.log(scriptureAsAnObject);
		
		scripturesInLocalStorage.push(scriptureAsAnObject);
		console.log(scripturesInLocalStorage);
		
		if (scripture !== ""){
			// Create a Delete Button
			const deleteBtn = document.createElement("button");
			deleteBtn.innerHTML = "\u2718";

			// Create i element to hold the add scripture success message
			let successMessage = document.createElement("i")
			successMessage.textContent = "Scripture Added Successfully! ";
			
			// Create li element to hold the new scripture
			let newLiElement = document.createElement("li");
			let newSpanElement = document.createElement("span")
			newSpanElement.textContent = scripture;

			let div = document.createElement("div");
			div.appendChild(deleteBtn);

			newLiElement.appendChild(successMessage);
			newLiElement.appendChild(newSpanElement);
			newLiElement.appendChild(div);
			
			// Add the newly created li element having new scripture to the list of tasks
			document.getElementById("scripture-container").appendChild(newLiElement);
			
			// Functionality to make the delete button remove the li having a task
			deleteBtn.addEventListener("click", () => {
				document.getElementById("scripture-container").removeChild(newLiElement);
				scripturesInLocalStorage = scripturesInLocalStorage.filter((scriptureInLoop) => {
							if(scriptureInLoop.id !== scriptureAsAnObject.id){
								return scripture;
							}
				})
				// console.log(scripturesInLocalStorage.length);
				// console.log(scripturesInLocalStorage);

				localStorage.setItem('scripturesInLocalStorage', JSON.stringify(scripturesInLocalStorage));
			})

			// Store the new state of the array objects in the local storage
			localStorage.setItem('scripturesInLocalStorage', JSON.stringify(scripturesInLocalStorage));

		}
    }
});

// FUNCTIONALITY TO GET SCRIPTURES FROM LOCAL STORAGE AND CALL PROCESS TO LOAD & DISPLAY THEM
const getFavoriteScriptures = () => {
	// console.log("Working!");
	// Remove the hint message first
	const hintMessage = document.getElementById("hint-message");
	hintMessage.classList.add("hint-message-appear-disappear");

	// Clear the space where the scripture will be displayed
	let ScriptureContainer = document.getElementById("scripture-container");
	ScriptureContainer.innerHTML = " ";

	// Get the scriptures from the local storage
	const scripturesInLocalStorage = JSON.parse(localStorage.getItem('scripturesInLocalStorage'));
	// console.log(scripturesInLocalStorage.length);
	if(scripturesInLocalStorage !== null || scripturesInLocalStorage.length > 0 ) {
		loadScriptures(scripturesInLocalStorage);
	}
	if(scripturesInLocalStorage.length == 0){
		// console.log(scripturesInLocalStorage.length);
		// Create div element to hold a message saying currently no favorite scriptures
		// are available and invite user to add some
		let messageContainer = document.createElement("div");
		let newSpanElement = document.createElement("span");
        newSpanElement.textContent = "You Currently Don't Have Any Favorite Scriptures. Press Get Scripture! and then press Add as Favorite.  -- Happy Reading! --";
		messageContainer.appendChild(newSpanElement);

		// Display the message to the user
		document.getElementById("scripture-container").appendChild(messageContainer);
	}

}

const allScriptures = document.getElementById("getFavoriteScriptures");
allScriptures.addEventListener("click", getFavoriteScriptures);

