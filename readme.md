// const processNumber = (num, callback) => {
//     return callback(num);
// };
// const double = (number) => {
//     return number * 2;
// };
// const result = processNumber(5, double);
// console.log(result);




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



    // const year = 2026;
    //    let birthyear = prompt("entrez l'annee de naissance de l'utilisateur");
    //    let age = year-birthyear;
    //    if(age <= 13){
    //         console.log("l'utilisateur doit regarder lilo et switch");
    //     }else if(age <18){
    //         console.log("l'utilisateur doit regarder matrix");
    //     }else{
    //         console.log("l'utilisateur doit regarder evil dead");
    //     }

    // let nombre1 = prompt("entrez le premier nombre");
    // let nombre2 = prompt("entez le deuxieme nombre");
    // let multiplication = nombre1 * nombre2;
    // console.log(multiplication > 0 ? + nombre1 + "*" + nombre2 + " = " + multiplication + " est positif" : + nombre1 + "*" + nombre2 + " = " + multiplication + " est negatif");

