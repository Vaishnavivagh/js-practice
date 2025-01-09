const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"

}
//for in loop 
for (const key in myObject) {
    console.log(`${key} is used for ${myObject[key]}`);
}

const programmin = ["js", "py", "php"]

for (const key in programmin) {
    console.log(programmin[key]);
    
}