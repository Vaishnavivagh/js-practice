/*switch (key) {  //this is the formula
    case Value:

    break;

    default:
        break;

}*/

// when you have too many condtion to check then you can use switch flow instead of if-else 

const monthe = 3

switch (monthe) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("jany");
        break;
    case 4:
        console.log("uary");
        break;
    default:
        console.log("default case match");
        break;   
}