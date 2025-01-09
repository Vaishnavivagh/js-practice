





//falsy values
/*
false, 0, -0, BigIn 0n, "", null , undefined, NaN
*/

/*
truthy values
"0", 'false', " ", [], {}, function(){}, 
*/

//Nullish Coalscing Opreator (??): null undefined

let val1 ;
val1 = 5 ?? 10

console.log(val1);

//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less") : console.log("more");