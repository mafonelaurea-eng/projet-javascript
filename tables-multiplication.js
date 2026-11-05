let i, j;
let k;
for (j = 1; j <= 10; j++) {
    k = j;
    console.log("==============================================\n");
    console.log("la table de multiplication de " + k + " est: \n");
    console.log("==============================================\n");
    for (i = 0; i <= 10; i++) {
        console.log(k + " * " + i + " = " + (k * i));
    }
}

