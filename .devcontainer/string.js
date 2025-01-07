const name = "vagh";
const repoCount = 50;

console.log(`Hello may name is ${name} and my repo count is ${repoCount}`); // this modern way to wright syntex

const gameName = new String('Vijash');

console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "  Vijash  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vijash.con/vijash%256vagh"

console.log(url.replace('%256', '03'));

console.log(url.includes('03')) // you can ask question using this string
console.log(url.includes('tech'));

console.log