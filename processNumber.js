const processNumber = (num, callback) => {
    return callback(num);
}
const carre = (number) => {
    return number * number;
}
const resultat = processNumber(7, carre);
console.log(resultat);
