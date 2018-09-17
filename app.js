console.log("It works! Hope so..");
var myName = 'Michal';
var myAge = 35;
//string array
var hobbies = ["silownia", "modele"];
console.log(typeof (hobbies));
//number array, 
var numberArray = [100];
console.log(typeof (numberArray));
//tuple
var tupleTest = ["tekstowa", 100];
//enum
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
//functions:
function returnMyName() {
    return myName;
}
function multiply(value1, value2) {
    return value1 * value2;
}
//function types
var myFunctionType;
myFunctionType = multiply;
console.log(myFunctionType(4, 5));
//object using my type: 
var myObject = {
    name: "michal",
    age: 25
};
//Destructuring arrays
var myHobbies = ["cooking", "spports"];
var hobby1 = myHobbies[0], hobbby2 = myHobbies[1];
console.log(hobby1, hobbby2);
