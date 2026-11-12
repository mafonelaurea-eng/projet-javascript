const utilisateurs = [
    {
        id_utilisateur: 1,
        nom: "Towa sandra",
        profession: "etudiante",
        age: 200
    },
    {
        id_utilisateur: 2,
        nom: "laura",
        profession: "etudiante",
        age: 200
    },
    {
        id_utilisateur: 3,
        nom: "stephanie",
        profession: "etudiante",
        age: 200
    }
];

const commandes = [
    {
        id_commande: 1,
        prix_total: 3000,
        date_commande: "2026-12-30",
        id_util: 1
    },
    {
        id_commande: 2,
        prix_total: 5000,
        date_commande: "2026-12-30",
        id_util: 3

    },
    {
        id_commande: 3,
        prix_total: 50000,
        date_commande: "2026-12-30",
        id_util: 3

    },
     {
        id_commande: 4,
        prix_total: 50000,
        date_commande: "2026-12-30",
        id_util: 2

    }
];
    utilisateurs.forEach(users => {
    const filtrer = commandes.filter((commande) => users.id_utilisateur === commande.id_util);
    const ca = filtrer.reduce((somme, commande) => somme + commande.prix_total, 0);
    //console.log(ca);
       
        console.log("le client est", users.nom, "et le chiffre d'affaire est",ca);
 
    });
  







