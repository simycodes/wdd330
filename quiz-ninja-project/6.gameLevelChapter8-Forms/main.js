const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),

    //helper function render() that is used to update the content of an 
    //element on the page. Arguments include:
    //first(target) is the element that displays the content, the second is for the 
    //content it’s to be updated with, and the last is an object of any HTML 
    //attributes that can be added to the element.
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }

        //putting new information in the innerHTML of the element
        target.innerHTML = content;
    },
    //The function loops through any attributes provided as the third argument, 
    //and uses the setAttribute() method to update them to the values provided.
    //It then uses the innerHTML property to update the HTML with the content provided.

    //utility functions that will show and hide elements on a page
    show(element){
       element.style.display = 'block';
     },

    hide(element){
       element.style.display = 'none';
    },

    resetForm(){
        this.response.answer.value = '';
        this.response.answer.focus();
    },

    //view.setup() is used to set up the view when the game start
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        this.resetForm();
    },

    //his is called at the end of the game, and is responsible for hiding any elements
    //that aren’t required and making the start button visible again.
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};

const game = {
    start(quiz){

        //this.questions becomes an array variable created by the destructuring process
        //of the passed in quiz object -hence this,questions now holds 3 objects
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
    },

    ask(name){
        if(this.questions.length > 0) {
            //the pop() method is used to remove the last element of the array and 
            //assign it to this.question
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
        }
        else {
            this.gameOver();
        }
    },

   check(event){
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        view.resetForm();
        this.ask();
    },

    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
    }
}

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);


