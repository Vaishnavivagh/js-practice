 //Numbers
 const score = 400
 console.log(score);


 const balance = new Number(100) // you can used toFixed method value
 console.log(balance);
 console.log(balance.toString());


 const otherNumber = 223.89656  // use carfully toPrecision can use valu before the point or after the point
 console.log(otherNumber.toPrecision(3));


 const hundreds = 1000000
 console.log(hundreds.toLocaleString());  // read MDM docs for great clearity 
 


//Maths 

/*console.log(Math); // it is considers as objects

console.log(Math.abs(-4)); // it is absolute which convert -- sign into postive sign  */

console.log(Math.random());  //math random valu is always between 0 to 1
console.log((Math.random()*5) + 1);
console.log(Math.floor(Math.random()*5) + 1) // math floor convert value to like 0.25 to 0 1.25 to 1


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min  +  1)) + min) // to use min and max value then we can use this formula 