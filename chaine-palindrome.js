let chaine = "radar";
let taille = chaine.length;
let i;
let palindrome = true;
for(i=0; i<taille/2; i++){
    if(chaine[i] != chaine[taille-1-i]){
        palindrome = false;
        console.log("la chaine " + chaine + "n'est pas un palindrome");
    }
}
if(palindrome == true){
    console.log("la chaine " + chaine + " est un palindrome");
}
