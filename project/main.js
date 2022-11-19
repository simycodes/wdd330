// For our Ajax requests, we'll be using a couple of online APIs. The first is NumbersAPI,
// which returns facts about random numbers as a text string. The second is chucknorris.io,
// which returns a JSON string, containing a random satirical factoid about everybody's
// favorite hard man, Chuck Norris.

// This example shows how easy it is to request data from a server, then insert it into a
// web page, although there are some subtle differences depending on what type of data is
// returned.

const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

const apiURL = 'https://labs.bible.org/api/?passage=random&type=json';

// Assigning an event handler to the JSON string
apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data[0].bookname + " " + data[0].chapter + ":" + data[0].verse + "." + data[0].text )
    .catch( error => console.log('There was an error:', error))
},false);