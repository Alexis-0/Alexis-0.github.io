// Part A
let celsius1= prompt("enter a temperature");
let Fahrenheit1= (9/5)* celsius1+32;
console.log(`${celsius1} C is equal to ${Fahrenheit1} F`);
let fahrenheit= prompt("enter a new temperature");
let celsius= (5/9)* (fahrenheit-32);
console.log(`${fahrenheit} F is equals= to ${celsius} C`);

// part B
let Lucasbmi= 90/(1.78*1.78);
let Johnbmi=80/(1.88*1.88);

console.log(Lucasbmi)
console.log(Johnbmi)
if(Lucasbmi>Johnbmi){ console.log("Lucas's bmi is higher");
} else console.log("John's bmi is higher");


if(Lucasbmi>Johnbmi) {console.log("True");
} else console.log("False");


// part C
let num= prompt("enter a number");
if (num ==10 || num ==8){
    console.log("YOU WIN!");
}
else {
    console.log("NOT A MATCH, YOU LOSE!");
}
