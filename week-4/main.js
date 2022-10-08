//const input = form.elements.searchInput;
const input = document.querySelector('input');
input.value = 'Search Here';

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);
//Similar functionality can be produced in modern browsers using the placeholder
// attribute in the HTML markup.

//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);

const form = document.forms['search'];
form.addEventListener('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault(); //stopping the form from being submitted to that URL
}


