//singleton
//object.create
 //const tinderUser = new Object()
 const tinderUser = {}

 tinderUser.id = "123zxc"
 tinderUser.name = "Vijash"  //the value be keys and second valuse be values
 tinderUser.isLoggedIn = false


 console.log(tinderUser);


 const regularUser = {
    email : "vagh@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Vijash",
            lastname :"Tech"

        }
    }
 }
 console.log(regularUser.fullname.userfullname);  // when full name was not exixt then you can syntex like this "fullname?"




 const obj1 = {1:"a", 2:"b"}
 const obj2 = {3:"c", 4:"d"}

 const obj3 = {obj1, obj2}
//objects.assign({}, obje1 obj2) this value can show the assign value which are in the objects in the object
//you can also used {...obj1,...obj2} 
console.log(obj3);


const users = [   //you can also have too many arry which have object intside this 
    {
        id : 1,
        email : "Vi@.com"
    }
]

console.log(tinderUser);  // you can use this when you are working on database
 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));  // when you don't have property then you can this method so you can ask to it that is this propert is avalible it or not 




 









//object literals*const mySym = Symbol("Key1")

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

