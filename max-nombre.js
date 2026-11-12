const tableau = new Array(12, 8, 5, 90);
console.log("Taille du tableau : " + tableau.length); 
let max = tableau[0]; 
for (let i = 0; i < tableau.length; i++) {
    
    if (tableau[i] > max) {
        max = tableau[i]; 
    }
}
console.log("Le maximum est : " + max); 
