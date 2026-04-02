// Fighter Emojis Array
const fighterEmojis = ["🥊", "🤼", "🥋", "🤺", "👊", "🦾", "💪", "⚔️", "🗡️", "🛡️"];

let person = {
    name: "Jameel",
    eduction: "BSCS",
    country : "Pakistan"
}
let age = 18;
function logData(){
    let introduction = "My name is " + person.name + " and I am studying " + person.eduction + " in " + person.country;
    return introduction;
}
let biodata = logData();
console.log(biodata);

if(age < 6){
    console.log("You can get Free");
}
else if(age < 18){
    console.log("child Discount");
}
else if(age < 27){
    console.log("Student Discount....");
}
else if( age < 67){
    console.log("Full Price");
    
}
else{
    console.log("You are senior citizen. you can get some discount");
    
}
let largestCountries = ["china", "india", "USA", "Indonesia", "Pakistan"];
console.log("Five Largest Countries in the world");

for(let i = 0; i < largestCountries.length; i++){
    console.log("- "+largestCountries[i]);
}
let anotherCountries = ["Turkey", "Thailand", "Tanzania", "Tunisia", "Togo"];
anotherCountries.pop();
console.log(anotherCountries);

anotherCountries.push("Pakistan");
console.log(anotherCountries);
anotherCountries.shift();
console.log(anotherCountries);
anotherCountries.unshift("China")
console.log(anotherCountries);

let dayofMonth = 13;
let weekday = "Friday";
if(dayofMonth === 13 && weekday === "Friday") console.log("Spooky face 🙈");

let hands = ["rock", "paper", "scissors"];
function getHand(){
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
}
console.log(getHand());




let EmojiEl = document.querySelector("#Emoji-el");
let fightBtn = document.querySelector("#fight-el");
fightBtn.addEventListener("click", function(){
    let leftIndex = Math.floor(Math.random() * fighterEmojis.length);
    let rightIndex = Math.floor(Math.random() * fighterEmojis.length);
    EmojiEl.textContent = fighterEmojis[leftIndex] + " VS " + fighterEmojis[rightIndex];
});
