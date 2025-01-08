// {} this is scope called



//nested scope 
function one(){
   const username = "Vijash"

   function two(){
    const website = "Youtube" 
    console.log(username);
   }
   //console.log(website)
   two()
}
one()


if (true) {
    const username = "Vijash"
    if (username === "Vijash") {
        const website = "Youtube"
        console.log(username + website);
    }
    //console.log(website);

}
//console.log(username)

//+++++++++ interesting++++++++++++

function addone(num){
  return num + 1
}
addone(5)

const addTwo = function(num) {  // sometime it is called expression
    return num + 2
}
addTwo(5)