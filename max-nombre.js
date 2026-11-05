const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("entrez le premier nombre:", (test1) => {
    let nombre1 = Number(test1);
    readline.question("entrez le nombre 2:", (test2) => {
    let nombre2 = Number(test2);
    readline.question("entrez le nombre 3:", (test3) => {
    let nombre3 = Number(test3);
    if(nombre1 > nombre2 && nombre1 > nombre3){
        console.log("le nombre " + nombre1 + "est le plus grand");
    }else if(nombre2 > nombre1 && nombre2 > nombre3){
        console.log("le nombre " + nombre2 + "est le plus grand");
    }else{
        console.log("le nombre " + nombre3 + " est le plus grand");
    }
    readline.close();
});
});
});

