let userChoice = prompt("heads or tails?")
let randomNumber = Math.floor(Math.random()*2)? 0 : 1;
console.log(randomNumber)
let computerChoice = randomNumber
if (randomNumber === 0){
    computerChoice = "heads";
}else{
    computerChoice = "tails";
}
console.log(computerChoice)

if (userChoice = computerChoice){
    alert("You guessed right! The coin flip landed on " + userChoice);
}else if (userChoice != computerChoice){
    alert("Sorry, the coin flip landed on " + !userChoice);
}

let birthYear = prompt("What year were you born in?")
let currentYear = 2022
let age = (currentYear - birthYear)
if (age >= 22){
    alert("You are old enough to drink in the US");
}else if (age <= 20){
    alert("Sorry, you are not old enough to drink in the US");
} else {
    alert("You are old enough to drink in the US...barely")
}