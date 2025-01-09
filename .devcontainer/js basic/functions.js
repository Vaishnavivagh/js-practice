
function addTwoNumbers(number1, number2) {  // here are the parameters
    
    return number1 + number2

}
const result =  addTwoNumbers(3, 4) // this what we need excucate function  when you call the function and which value is going to excute this called arguments
 console.log("Result:", result); // for this we need remove console from there and write retun statment


function loginUserMassage(username) {
     
    if(!username ){   // you can use this for desfine undefined value
       console.log("plase your name ?")
       return
    }
    return ` ${username} just logged in`
}
console.log(loginUserMassage());
 //shopping cart parameters

function calculateCartPrice(...num1) {   //... is called rest oprator or speread oprator
    return num1
}
console.log(calculateCartPrice(200, 400, 600)) // in this methon value is only print first value not ohthers value

const user = {
    username: "Vijash",
    owner : 2
}
function handleOnject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.owner}`);
}
//handleOnject(user)
handleOnject ({
    username: "Via", // you can also used like object array  here we used objects
    owner : 1
})

const myNewArray = [200, 400, 600]   // here we have used array methods
function retunSecondValue(getArray) {
    return getArray[1]
}
console.log(retunSecondValue(myNewArray));

