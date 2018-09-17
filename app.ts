console.log("It works! Hope so..");
let myName: string= 'Michal';
let myAge: number = 35;

//string array
let hobbies: string[] = ["silownia", "modele"];
console.log(typeof(hobbies));

//number array, 
let numberArray = [100];
console.log(typeof(numberArray));

//tuple
let tupleTest:[string, number] = ["tekstowa", 100];

//enum
enum Colors {
   Gray,
   Green,
   Blue
}

//functions:
function returnMyName(): string{
   return myName;
}


function multiply(value1: number, value2: number): number {
   return value1 * value2;
}

//function types
let myFunctionType: (val1: number, val2: number) => number;

myFunctionType = multiply;
console.log(myFunctionType(4,5));

//defining my own type and using its 'blueprint":
type myType = {name: string, age:number};
//object using my type: 
let myObject:myType = {
   name: "michal",
   age: 25
};

//Destructuring arrays
const myHobbies = ["cooking", "spports"];
const [hobby1, hobbby2] = myHobbies;
console.log(hobby1, hobbby2);




