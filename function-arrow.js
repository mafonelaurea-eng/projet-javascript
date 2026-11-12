const carreNombre = (x) =>  x * x;

console.log(carreNombre(5));

const pariteNombre = (x) => {
    if(x%2 == 0){
        return "le nombre est pair";
    }else{
        return "le nombre est impair";
    }
}
console.log(pariteNombre(5));

const getinitials = (nom,prenom) =>  nom.charAt(0) + prenom.charAt(0);

console.log(getinitials("Moumbe","jean"));