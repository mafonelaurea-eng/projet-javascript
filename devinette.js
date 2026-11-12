const readline = require("readline").createInterface({
    input : process.stdin,
    output: process.stdout,
});
readline.question("entrez votre nombre a plusieurs chiffres: ", (test) => {
    let nombre = test;
    if(nombre>0){
        console.log("le nombre est positif");
    }else if(nombre == 0){
        console.log("le nombre est nulle");
    }else{
        console.log("le nombre est negatif");
    }
});