class Catalogue {
    constructor() {
        this.produits = [];
    }
    ajouterproduit({nom,quantite,description,prix}) {
        const nouvelId = (this.produits.length > 0 ? Math.max(...this.produits.map((p) => p.id))+1 : 1);
        const ajoutproduit = { id: nouvelId, nom, quantite, description, prix }
        this.produits.push(ajoutproduit);
        return ajoutproduit;
    }

    rechercheproduit(lettre) {
        if (!lettre) return this.produits;
        const lettreactuelle = lettre.toLowerCase();
        return this.produits.filter(({ nom, description }) => {
            return nom.toLowerCase().includes(lettreactuelle) || description.toLowerCase().includes(lettreactuelle);
        });

    }

    filtrageproduit(prixMin = 0, prixMax = 2000000) {
        return this.produits.filter(produit => {
            const Prix = produit.prix >= prixMin && produit.prix <= prixMax;
            return Prix;
        });
    }
    calculerStatistiques() {
        if (this.produits.length === 0) return {
            totalProduit: 0,
            statprix: 0,
            valeurTotal: 0
        }
        const statprix = this.produits.reduce((total, { prix }) => total + prix, 0);
        const valeurTotal = this.produits.reduce((total, { prix, quantite }) => {
            return total + (prix * quantite);
        },0);
        const totalProduit = this.produits.length;
        return {
            valeurTotale: `${valeurTotal} FCFA`,
            prix: `${statprix} FCFA`,
            totalProduit
        }
    }

}


const monCatalogue = new Catalogue();


monCatalogue.ajouterproduit({ nom: "Ordinateur Portable", quantite: 3, description: "PC haute performance", prix: 45000 });
monCatalogue.ajouterproduit({ nom: "Calculatrice", quantite: 3, description: "calculatrice moderne", prix: 3000 });
monCatalogue.ajouterproduit({ nom: "disque dur", quantite: 3, description: "disque externe 2tera", prix: 20000 });


console.log(" Résultat recherche 'cahier' :");
console.log(monCatalogue.rechercheproduit("calculatrice"));


console.log("Résultat filtrage");
const produitsFiltres = monCatalogue.filtrageproduit(4000);
console.log(produitsFiltres);


console.log("Statistiques du catalogue :");
console.log(monCatalogue.calculerStatistiques());


