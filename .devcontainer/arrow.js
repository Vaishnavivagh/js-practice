/*const user ={
    username: "vijash",
    price: 299,

    welcomeMassage: function(){
        console.log(`${this.username}, welcome to the website `)  //this is used for know current statemetn of user
        console.log(this);
    }
}
user.welcomeMassage()
user.username = "vagh"
user.welcomeMassage()

console.log(this);  // in nord enviorment this used empty

const chai = () => {     // => this is arrow functions
     let username ="tiger"
     console.log(this.username) // here we will get undefined value
}
chai()*/


// arrow functions 

//const addTwo = (num1, num2) => {
    //return num1 + num2
//}

//const addTwo = (num1, num2) =>  num1 + num2  //this is implicit return   //in {} we have to write return
const addTwo = (num, num2) => ({username: "vijash"})  // this object how we can write


console.log(addTwo(3, 4));