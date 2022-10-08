// function doSomething1(){
//     console.log('Something Happened!');
// }

// function doSomething(event){
//     console.log(event.type);
//     console.log(event.target);
//     console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
// }

// addEventListener('click', doSomething);

//TYPES OF EVENTS
//Mouth Events
//1.
const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

//2.
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

//3.
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

//KEYBOARD EVENTS
//4.
addEventListener('keydown',highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

//TOUCH EVENTS
addEventListener('touchend', () => console.log('Touch stopped'));

//STOPPING EVENT DEFAULT BEHAVIOR
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
    alert("Broken Link");
});

//EVENT DELEGATION - best way to add event listeners to many elements in a list
function highlight2(event){
    event.target.classList.toggle('highlight');
}

ulElement1 = document.getElementById('list');
ulElement1.addEventListener('click', highlight2);

//EVENT PROPAGATION
//Event propagation is the order that the events fire on each element. 
//There are two forms of event propagation: bubbling and capturing.

//Bubbling Demonstration
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );

//Now try clicking on the first <li>(one) element in the list. There should be a message in 
//the console saying “Clicked on li" because this was the target element. The event 
//then bubbles up to the parent <ul> element and displays a message in the console
// saying “Clicked on ul”. The event will continue to bubble all the way to the root 
//HTML element, but nothing will happen because none of the other elements had event 
//listeners attached to them.

//Implementing propagation -comment bubbling and uncomment code below to see results
// ulElement = document.getElementById('list');
// liElement = document.querySelector('#list li');

// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),true);

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),true);

//Now if you click on the first list item, "Clicked on ul" will be logged to the 
//console first. The events then propagate downwards to the child <li> element, 
//so "Clicked on li" is logged to the console next.

//If you want the event to both capture and bubble, you must set a separate event
// handler for both cases, like so:

// capturing

// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),true);

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),true);

// bubbling

// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),false );

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),false );


//If you click on the second or third <li> elements in the list you will only see the 
//message "Clicked on ul". This is because, even though these elements don't have an 
//event listener attached to them, the click still bubbles up and is captured by the 
//<ul> element that does have an event listener attached.


// Coordinates of an Event
// There are a variety of ways to find the position of where a mouse event occurs.
// The screenX and screenY properties show the number of pixels from the left and top of the 
// screen respectively where the event took place.
// The clientX and clientY properties show the number of pixels from the left and top of the
// client that is being used (usually the browser window).
// The pageX and pageY properties show the number of pixels from the left and top, 
// respectively, where the event took place in the document. This property takes 
// account of whether the page has been scrolled.
// All these event properties are similar, but subtly different. They are useful for 
// finding out the place where a click happened or the position of the mouse cursor.