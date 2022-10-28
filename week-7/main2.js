// Unfortunately, we don't have a database to save our tasks to, so we're going to have 
// to use a dummy site called JSONPlaceholder. This spoofs the process of sending JSON 
// data to a server, then receiving JSON data in response. It has a number of fake APIs 
// that can be used to create fake examples of posts, comments, albums, photos, todos 
// and users. We'll be using the fake todo API.
// https://jsonplaceholder.typicode.com/


// This code creates an event listener that first of all prevents the default behavior 
// of the form, so it doesn't get submitted when the Add Task button is clicked.
const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';

    // build the Headers and Request objects. Because we are sending JSON, we need to add 
    // headers of 'Accept': 'application/json' and 'Content-Type': 'application/json'. 
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });

    // Because we are sending data, we need to ensure that the method property of the 
    // request object is POST so that a POST request is used to send the data.
    const request = new Request(url,
    {
        method: 'POST',
        header: headers,
        body: data
    }
    )
    // The most important property of the request object is body – this is where the data we
    // want to send is placed. We use the data variable here, so that JSON is sent to the server.

    // Then we use the fetch() method to send the request and deal with the response
    fetch(request)
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))

}

// If you open up the 'todo.html' file, add a task in the form and then submit it, you 
// should see a message that the task is successfully saved
// This fakes the fact that the task has been saved to a database and the relevant data
// has been returned. In reality, the data hasn’t been saved, and the ID property has
// just been randomly generated for demonstration purposes.