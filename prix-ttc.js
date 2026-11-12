function calculatePrixTTC(prixHT, tauxTVA){

    let prixInt =  Math.floor(prixHT * (1 +tauxTVA / 100));
    return prixInt;
}
const prixTTC = calculatePrixTTC(1000, 19.25);

console.log(prixTTC);
