// for of loop

const arr = [1, 2, 3]
for (const num of arr) {
    console.log(num);
}


//maps is javascript 

const map = new Map()
map.set('IN', "INDIA")
map.set('Iasfg', "INDaesrIA")
map.set('INafg', "aegINDIA")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
