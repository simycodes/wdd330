const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

const game = {
    start(quiz){

        //this.questions becomes an array variable created by the destructuring process
        //of the passed in quiz object -hence this,questions now holds 3 objects
        this.questions = [...quiz];
        this.score = 0;
        
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
        //response has local scope of ask not like this.question,hence needs to be
        //passed as argument when calling this.check() method
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
           alert('Correct!');
           this.score++;
        } 
        else {
          alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

game.start(quiz);