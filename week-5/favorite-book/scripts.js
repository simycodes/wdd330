//Create three variables that hold references to the input, button, and list elements using const.

document.getElementById("submit-chapter").addEventListener("click",function(){
	const favoriteChapterName = document.getElementById("favchap").value;
	//console.log(favoriteChapterName);
	
	if (favoriteChapterName !== ""){
		
		const deleteBtn = document.createElement("button");
		deleteBtn.innerHTML = "\u274C";
		
		let newCreatedLiElement = document.createElement("li")
		newCreatedLiElement.textContent = favoriteChapterName;
		newCreatedLiElement.appendChild(deleteBtn);
		
		document.getElementById("list-favorite-chapters").appendChild(newCreatedLiElement);
		
		//functionality to make the delete button remove the li element-favorite chapter
		deleteBtn.addEventListener("click",function(){
			document.getElementById("list-favorite-chapters").removeChild(newCreatedLiElement);
		})

		//clearing up the input area
		document.getElementById("favchap").value = "";

		//bringing focus to the input area
		const favChapterNameFocusArea = document.getElementById("favchap");
		favChapterNameFocusArea.focus();
	}
	
});