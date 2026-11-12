function obtenirmention(mention) {
    switch (true) {
        case mention === "null":
            return 0;
        case mention === "faible":
            return "[1-9]";
        case mention === "passable":
            return "[10-11]";
        case mention === "assez bien":
            return "[12-15]";
        case mention === "bien":
            return "16";
        case mention === "tres bien":
            return "17";
        case mention === "excellent":
            return "[18-20]";
            default:
                return "la mention invalide";
    }
}
console.log(obtenirmention("null"));
// const readline = require("readline").createInterface({
//         input : process.stdin,
//         output : process.stdout,
// });
// readline.question("entrez votre  nombre:", (test) => {
//       let nombre1 = Number(test);
//       console.log(nombre1<0 ? "le nombre est negatif" : "le nombre est positif");
// });