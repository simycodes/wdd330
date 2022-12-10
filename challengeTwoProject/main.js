//FUNCTIONALITY TO GET A RANDOM SCRIPTURE FROM AN EXTERNAL API
const apiButton = document.getElementById('getScripture');
const outputDiv = document.querySelector('.scripture-space');

const apiURL = 'https://labs.bible.org/api/?passage=random&type=json';

// Assigning an event handler to the JSON string
apiButton.addEventListener('click', () => {
    // localStorage.clear(); - This clears all the localStorage Data - storage reset
    // Clear the space where the favorite scriptures will be displayed - In case the
	// 'no favorite scriptures' message is being displayed
	let ScriptureContainer = document.getElementById("scripture-container");
	ScriptureContainer.innerHTML = " ";
    
    // Get the scripture from the API
    fetch(apiURL)
    .then(response => {
        outputDiv.innerHTML = 'getting a wonderful bible verse for you ...please wait...';
    if(response.ok) {
        // Remove the hint message first
	    const hintMessage = document.getElementById("hint-message");
	    hintMessage.classList.add("hint-message-appear-disappear");
        
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data[0].bookname + " " + data[0].chapter + ":" + data[0].verse + ". " + data[0].text )
    .catch( error => console.log('There was an error:', error))

},false);


