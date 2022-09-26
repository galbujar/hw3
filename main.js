let userChoice = prompt("heads or tails?")
let randomNumber = Math.floor(Math.random()*2)
console.log(randomNumber)
if (randomNumber === 0){
    computerChoice = "heads";
}else{
    computerChoice = "tails";
}
console.log(computerChoice)

if (userChoice === computerChoice){
    alert("You guessed right! The coin flip landed on " + userChoice);
}else{
    alert("Sorry, the coin flip landed on " + computerChoice);
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