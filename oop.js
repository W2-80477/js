// class car{
//     constructor(brand , country){
//       this.brand = brand;//point to the current object
//       this.country = country;
//     }
//     printDetails(){
//         console.log("Details", this.brand,this.country);
//     }
// }
// let swift = new car ("maruti", "japan");// creating an object 
// let tata = new car ("jaguar", "india");// creating an object 

// tata.printDetails()

// call mathod 

// let person ={
//   firstName:"satyam",
//   lastName :"kumar",
  
//  talk: function(){
// console.log("my name is " , this.firstName, this.lastName);
// }

// }
// let person1 ={
//   firstName: "ms",
//   lastName:"dhoni",
// }
// console.log(person.firstName)
// person.talk();
// console .log(person1.firstName)
// person.talk.call(person1)

// Bind
let person={
  firstName: "satyam",
  LastNmae: "kumar",
  
}


let person2={
  firstName:"ms",
  LastNmae:"dhoni"
}
function printDetails(){
  console.log(this);
  console.log(this.firstName +" "+ this.LastNmae)
}
let person_func=printDetails.bind(person);
let person2_func=printDetails.bind(person2);

person_func();
person2_func();
