//array

const myArr = [0, 1, 2, 3, 4, 5, 6]
                             // push use for add array and pop use for remove array
const newArr = myArr.join()

console.log(typeof newArr);



// slice spilice methond in arrys

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); // in the slice which add only portion 1.2 not incoud 3 

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1, 3) // in the spilice original portion of that slice whole slice are which is 1.2.3 this are removed  -- interview question
console.log("C", myArr);
console.log(myn2);


// arrays more basics

const heros = ["Shaktiman", "Ironman", "Superman"]
const dc_heros = ["Flash", "Aquamen", "Batman" ]

/*heros.push(dc_heros); // push only use exting array 
console.log(heros);
console.log(heros[3][1]);*/

const newHeros = heros.concat(dc_heros);
console.log(newHeros);                       //concat type of array which create a new array or add it


const allnewHeros = [...heros, ...dc_heros] //spread prototype used better then concat but work both same
console.log(allnewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]
const realArr = anotherArr.flat(Infinity) // flat type write al the array in one array wich have manyy arry in one array
console.log(realArr);



console.log(Array.isArray("Vijash"))
console.log(Array.from("Vijash"))
console.log(Array.from({name: "Vijash"})) // in this sitchvation we can empty array

let scroe1 = 100;
let scroe2 = 200;
let scroe3 = 300
console.log(Array.of(scroe1, scroe2, scroe3)); // it can convert all elemnt in arrays