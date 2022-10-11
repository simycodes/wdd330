'use strict'

const form = document.forms[0];

// THE MODEL
// Item class, each new list item that is created will be an instance of the Item class.
class Item {
    constructor(name) {
        this.name = name;
    }
}


// THE CONTROLLER
const controller = {
    watch(form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from being submitted
        this.add(form.name.value);
        }, false);
    },

    add(name) {
        const item = new Item(name);
        view.render(item);
    }
};

// THE VIEW
const view = {
    render(item) {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        li.innerHTML = item.name;
        list.appendChild(li);
        // reset the input field
        form.name.value = '';
    }
};


controller.watch(form);