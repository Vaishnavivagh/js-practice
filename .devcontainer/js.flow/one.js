//if 

const score = 200 

if (score > 100){
  const power = "fly"
  console.log(`use power : ${power}`);
}

console.log(`use power : ${power}`);  // when we run this progrrame there is error which have scope problem 

const balance = 1000

if (balance > 500) console.log("test");  // never use this type of code 


if (balance < 500) {
  console.log("less then")
}
else  if (balance < 750) {
  console.log("less")
}
else {
  console.log("notthart");
}

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedIn && debitCard) {  // in this condition both condition can check
 console.log("Allow to buy cource");
}
if (userLoggedInFromGoogle || userLoggedInFromEmail){  // in this or statemnet may be from google or email
  console.log("user logged in");
}