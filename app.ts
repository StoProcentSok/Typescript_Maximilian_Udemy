console.log("It works! Hope so..");
let myName: string = 'Michal';
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

let myColor: Colors = Colors.Gray;
console.log(myColor);
