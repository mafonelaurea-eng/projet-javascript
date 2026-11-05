const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("entrez votre nombre:", (test) => {
    let nombre = Number(test);
    let i;
    console.log("=======multiplication========")
    for (i = 0; i <= 10; i++) { 
            console.log(nombre + " * " + i + " = " + (nombre * i));
    }
      console.log("=======division========");
      for (i = 0; i <= 10; i++) {
            console.log(nombre + " / " + i + " = " +(nombre/i));
    }
      console.log("=======soustraction========");
      for (i = 0; i <= 10; i++) {
            console.log(nombre + " - " + i + " = " +(nombre-i));
    }
      console.log("=======addition========");
      for (i = 0; i <= 10; i++) {
            console.log(nombre + " + " + i + " = " +(nombre+i));
    }
    readline.close();
});
