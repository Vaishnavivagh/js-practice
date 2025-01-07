//Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // asked many time in interview

let myCreatedDate = new Date(2023, 0 , 23); // month start from 0 in javascript  and when you write dd-mm-yy then count will start from 01 or 1 
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // if you need time value then you can convert date into time value
console.log(Math.floor(Date.now()/1000)); // if you want to time second interview question

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
