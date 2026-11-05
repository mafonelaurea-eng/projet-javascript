const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("entrez la temperature en celsuis:", (test) =>{
    let temperature = Number(test);
    let conversion = ((temperature/1.8) + 32);
    console.log(" la temperature en fahrenheit est:" + conversion);
    readline.close();
})