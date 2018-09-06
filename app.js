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
var myColor = Colors.Gray;
console.log(myColor);
