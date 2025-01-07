//singleton
//object.create


//object literals
const mySym = Symbol("Key1")

const User = {
   name : "Vijash",
   age : 18,
   [mySym] : "Key1",//must need this bracket for refer that this symbol
   email: "vijash@gmail.com",

}

console.log(User.email); // this is symple method but sometime it was not work when value in the string  most of the time we can use this 
console.log(User["email"]); // this is the best wher we can accec the all type valuse which include string this used ont rarely cases 
console.log(User[mySym]); // use this method to get symbol value --interview question

User.email = "Vijash@tech.com"
//Object.freeze(User); // which freez the which we can't change after it 
User.email = "Vijash12342gmail.com"
console.log(User)

User.greeting = function() {
    console.log("Hello users")
}
User.greetingTwo = function() {
    console.log(`hello users, ${this.name}` ) // when you want to add any ohter value 
}

console.log(User.greeting()); //when you run this will be error first we have desfinrf this as function so remove objects from freez
console.log(User.greetingTwo());