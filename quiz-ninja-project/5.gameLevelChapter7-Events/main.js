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

    //helper function render() that can be used to update the content of an 
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
    }
};

const game = {
    start(quiz){

        //this.questions becomes an array variable created by the destructuring process
        //of the passed in quiz object -hence this,questions now holds 3 objects
        this.questions = [...quiz];
        this.score = 0;

        //make the start button disappear while the game is in progress, then reappear 
        //once the game has finished
        view.hide(view.start);
        
        // main game loop
        //using for-of loop through this.questions because its an array
        for(const question of this.questions){
           //this.question holds a single question(object) in each loop
           //this.question is has global scope,no need to pass it as argument in
           //this.ask() - its used directly there and in the check() method
           this.question = question; 
           this.ask();
        }
        // end of main game loop
        this.gameOver();
    },

    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response =  prompt(question);
        this.check(response);
    },

    check(response){
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            alert('Correct!');
            this.score++;
            view.render(view.score,this.score);
        } 
        else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },

    gameOver(){
        view.show(view.start);
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

game.start(quiz);
view.start.addEventListener('click', () => game.start(quiz), false);