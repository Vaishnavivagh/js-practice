// Immediately Invoked Function Expressiond(IIFe)

(function chai(){
    console.log(`hello world`) // this happed when we don't want to pollute from other functions
                               // we can directly excute function using this type methd when you want to direct connect with database
})();

// ; this need to excute more functions diretly so it can excute easly
( (name) => {
    console.log(`Hello world ${name}`);
}
)("Vijash");