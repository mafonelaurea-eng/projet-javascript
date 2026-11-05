function factorielle(n){
    if(n ==0 || n==1){
        return 1;
    }else{
        return n * factorielle(n-1);
    }
}
let nombre = 1;
console.log(" le factorielle de " + nombre + " est : " + factorielle(nombre));