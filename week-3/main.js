function doSomething1(){
    console.log('Something Happened!');
}

function doSomething(event){
    console.log(event.type);
    console.log(event.target);
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}

addEventListener('click', doSomething);

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