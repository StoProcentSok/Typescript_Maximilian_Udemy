class Person {
   name: string;
   private type: string;
   protected age: number;

   constructor(name: string, age: number){
      this.name = name;
      this.age = age;
      this.type = "type default";
   }

   printAge(){
      console.log(this.age);
      this.setType("Old Guy");
   }

   setType(type: string){
      this.type = type;
      console.log(this.type);
   }
}

class Michal extends Person {
   name = "Michal";

   constructor(){
      super("Michal", 25);
      this.age = 25;
   }
}

const ja = new Michal();

//getters and setters:
class Plant{
   private _species: string = "default";

   get species(){
      return this._species;
   }
   set species(value: string){
      if(value.length > 3){
         this._species = value;
      }else{
         this._species = "Default";
      }
   }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "jakas nazwa";
console.log(plant.species);




