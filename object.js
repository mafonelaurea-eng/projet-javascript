const utilisateurs =
{
    id_utilisateur: 1,
    nom: "Towa sandra",
    profession: "etudiante",
    age: 200
}



const produits = [
    {
        id_produit: 1,
        nom_produit: "cahier",
        prix: 3000,
        id_categorie:1,
    },
        {
        id_produit: 2,
        nom_produit: "cahier",
        prix: 3000,
          id_categorie:1,
    }
];

const orderPart1 = {
      id_commande: 1,
    prix_total: 3000,
    date_commande: "2026-12-30",
}

const orderPart2 = {
        id_user: 1,
    produits : produits, 
}


const commandes =
{
  ...orderPart1,
  ...orderPart2

}
const newOrder = {
    ...commandes,
    prix_total: 4000,
}

// console.log(newOrder);
const categorie = {
    id_categorie: 1,
    nom_categorie: "fourniture",

};
//destructuring
const { nom, profession } = utilisateurs;
// console.log(nom);
// console.log(profession);

//spread
const nouvel_objet = {
    nom: "towa sandra",
    age: 200,
    nom_produit: "cahier",
    prix: 3000

};
// console.log(nouvel_objet);

Math.max()

try{
    console.log(newOrder.prix_total.toString());

}catch(e){
    console.error(e);
}finally{
    
}


