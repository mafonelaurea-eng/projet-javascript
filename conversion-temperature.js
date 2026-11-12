const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("entrez la temperature en celsuis:", (test) =>{
    let temperature = Number(test);
    let conversion = ((temperature/1.8) + 32);
    let con = parseInt(conversion);
    console.log(" la temperature en fahrenheit est:" + con);
    readline.close();
})