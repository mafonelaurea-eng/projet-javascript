const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("entrez le premier nombre:", (test) => {
    let nombre = Number(test);
    readline.question("entrez le deuxieme nombre:", (test1) => {
        let nombre1 = Number(test1);

        console.log("=======multiplication========")

        console.log(nombre + " * " + nombre1 + " = " + (nombre * nombre1));

        console.log("=======division========");
        let division = nombre / nombre1;
        let div = parseInt(division);
        console.log(nombre + " / " + nombre1 + " = " + div);

        console.log("=======soustraction========");

        console.log(nombre + " - " + nombre1 + " = " + (nombre - nombre1));

        console.log("=======addition========");

        console.log(nombre + " + " + nombre1 + " = " + (nombre + nombre1));

        readline.close();
    });
});
