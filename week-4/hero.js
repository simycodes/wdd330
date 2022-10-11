const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;

    //iterating over form.powers using a for loop to see if each checkbox was checked.
    //Checkbox objects have a checked property that tells us if it has been checked or 
    //not. It is a boolean property, so can only have the values true or false. 
    hero.powers = [];
    for (let i=0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    //hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    

    //form.heroName.addEventListener('keyup',disableSubmit,false);

    // Saving the newly created hero object into local storage
    localStorage.setItem('hero', JSON.stringify(hero));

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

//VALIDATING FORM DATA FROM USER
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } 
    else {
    error.style.display = 'none';
    }
}

//The following function will disable the button if an input field is empty:
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}


// form.addEventListener('submit',validate,false);

// function validate(event) {
//     const firstLetter = form.heroName.value[0];
//     if (firstLetter.toUpperCase() === 'X') {
//         event.preventDefault();
//         alert('Your name is not allowed to start with X!');
//     }
// }