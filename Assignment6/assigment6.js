// 'part A'
function winner(){
let nets1= prompt('enter a number');
let nets2= Number(prompt('enter a new number'));
let nets3= Number(prompt('enter another number'));
let knicks1= Number(prompt('enter a number'));
let knicks2= Number(prompt('enter a new number'));
let knicks3= Number(prompt('enter another number'));
let avgnetsscore= calAvg('nets1 +nets2 +nets3');
let avgknicksscore= calAvg(`${knicks1}`+ `${knicks2}`+`${knicks3}`);

if (avgnetsscore>avgknicksscore){
    return 'nets win';
}
    
else return'knicks win';

// 'part B'
function finalbill(){
const bill= prompt('enter a dollar amount')
if (30>bill<100){
const tip=(`${bill}`*0.15);
const totalbill= (`${tip}` + `${bill}`)
}
else tip=(`${bill}`*0.20)
const totalbill= (`${tip}` + `${bill}`)
}
console.log(finalbill());
}
// 'part C'
// function 
// const somearray=[1,'john',2,'petter',true,false];
// for (let i=somearray.lenght[0]; i<0; i++){
//     console.log(somearray[i])

function ctof(){
    var celsius=Number(prompt('enter a number'));
    var fahrenheit= ((`${celsius}`*9/5)+32);
console.log(`${celsius} is equal to ${fahrenheit}`)
}
function ftoc(){
    var fahrenheit1=Number(prompt('enter a number'));
    var celsius1= ((`${fahrenheit1}`-32)/(5/9));
console.log(`${fahrenheit1} is equal to ${celsius1}`);
}
