//CHAPTER 1 - INTRO
alert('Welcome to Quiz Ninja!');

//CHAPTER 2 - PROGRAMMING BASICS
// const question = "What is Superman's real name?"
// const answer = prompt(question);
// alert(`You answered ${answer}`);

let question = '';
let answer = '';

//CHAPTER 3 - ARRAYS,LOOPS AND LOGIC(IF ELSE ETC)
//This is a nested array of strings
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

// initialize score
let score = 0 

//looping through the quiz array using a for-of loop, assigning the variables question 
//and answer to each key and value in the map.
for(const [question,answer] of quiz){
    //Destructuring is used, question gets initialized to first item of each sub array
    //and answer gets initialized to second item of each sub array
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);


//USING MAP TO MAKE QUIZ GAME - QUIZ LEVEL CHAPITER 3
// Set the questions
// const quiz = new Map([
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonderwoman's real name?","Dianna Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
//   ]);

//  // initialize score
// let score = 0;

// for(const [question,answer] of quiz.entries()){
//     // get answer from user
//     const response = prompt(question);
//     // check if answer is correct
//     if(response === answer){
//         alert('Correct!');
//         // increase score by 1
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }

// // At the end of the game, report the player's score
// alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);




