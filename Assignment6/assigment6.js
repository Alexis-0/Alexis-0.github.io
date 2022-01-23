// 'part A'

let nets1= Number(prompt('enter a number'));
let nets2= Number(prompt('enter a new number'));
let nets3= Number(prompt('enter another number'));
let knicks1= Number(prompt('enter a number'));
let knicks2= Number(prompt('enter a new number'));
let knicks3= Number(prompt('enter another number'));
let avgnetsscore= (`${nets1} +${nets2} +${nets3}`);
let avgknicksscore= (`${knicks1}`+ `${knicks2}`+`${knicks3}`);

if (avgnetsscore>avgknicksscore){
    console.log( 'nets win');
}
    
else console.log('knicks win');

// part C
const celsiusToFahrenheit = celsius => celsius * 9/5 + 32;

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(10));

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(10));
console.log(fahrenheitToCelsius(102));
// 'part B'

const bill= prompt('enter a dollar amount')
if (30>bill<100){
const tip=(`${bill}`*0.15);
const totalbill= (`${tip}` + `${bill}`);
console.log(`${totalbill}`)
} else {(`${bill}`*0.20);
const totalbill= (`${tip}` + `${bill}`);
console.log(`${totalbill}`)
}



// 'part C'
// function 
// const somearray=[1,'john',2,'petter',true,false];
// for (let i=somearray.lenght[0]; i<0; i++){
//     console.log(somearray[i])
