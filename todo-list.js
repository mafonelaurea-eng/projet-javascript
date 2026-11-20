const ajouterTacheBtn = document.getElementById("addTache");
const modaleFormulaire = document.getElementById("formulaire");
const formTache = document.getElementById("formTache");
const annulerBtn = document.getElementById("annulerTache");
const inputNom = document.getElementById("nomTache");
const inputDebut = document.getElementById("dateDebut");
const inputFin = document.getElementById("dateFin");
const erreurForm = document.getElementById("erreurForm");
const tbody = document.getElementById("listeTaches");
const messageVide = document.getElementById("messageVide");
const totalTachesSpan = document.getElementById("totalTaches");
const tachesRestantesSpan = document.getElementById("tachesRestantes");

ajouterTacheBtn.addEventListener("click", () => {
    modaleFormulaire.classList.remove("hidden");
    erreurForm.classList.add("hidden");
    inputNom.focus();
});

annulerBtn.addEventListener("click", () => {
    modaleFormulaire.classList.add("hidden");
    formTache.reset();
});

function mettreAJourInterface() {
    const toutesLesLignes = tbody.querySelectorAll("tr");
    const total = toutesLesLignes.length;
    let restantes = 0;
  
    toutesLesLignes.forEach((ligne, index) => {
        const celluleNumero = ligne.firstElementChild;
        celluleNumero.textContent = index + 1;

        if (!ligne.classList.contains("terminee")) {
            restantes++;
        }
    });

  
    totalTachesSpan.textContent = total;
    tachesRestantesSpan.textContent = restantes;

   
    if (total === 0) {
        messageVide.classList.remove("hidden");
    } else {
        messageVide.classList.add("hidden");
    }
}

function creerTacheElement(nom, debut, fin) {
  
    const tr = document.createElement("tr");
    tr.classList.add("hover:bg-gray-50", "transition-colors");

   
    const tdNum = document.createElement("td");
    tdNum.classList.add("px-4", "py-3", "font-medium", "text-gray-700");

    const tdNom = document.createElement("td");
    tdNom.classList.add("px-4", "py-3", "text-gray-900", "font-medium");
    tdNom.textContent = nom;

   
    const tdDebut = document.createElement("td");
    tdDebut.classList.add("px-4", "py-3", "text-gray-600");
    tdDebut.textContent = debut || "Non définie";

  
    const tdFin = document.createElement("td");
    tdFin.classList.add("px-4", "py-3", "text-gray-600");
    tdFin.textContent = fin || "Non définie";

   
    const tdActions = document.createElement("td");
    tdActions.classList.add("px-4", "py-3", "flex", "gap-2");

  
    const btnTerminer = document.createElement("button");
    btnTerminer.textContent = "Terminer";
    btnTerminer.classList.add("bg-green-600", "hover:bg-green-700", "text-white", "px-3", "py-1", "rounded", "text-sm", "cursor-pointer");

    btnTerminer.addEventListener("click", () => {
       
        const ligneParente = btnTerminer.parentElement.parentElement;
        ligneParente.classList.toggle("terminee");
        ligneParente.classList.toggle("bg-green-50");
        tdNom.classList.toggle("line-through");
        tdNom.classList.toggle("text-gray-400");

        if (ligneParente.classList.contains("terminee")) {
            btnTerminer.textContent = "Annuler";
            btnTerminer.classList.replace("bg-green-600", "bg-yellow-600");
            btnTerminer.classList.replace("hover:bg-green-700", "hover:bg-yellow-700");
        } else {
            btnTerminer.textContent = "Terminer";
            btnTerminer.classList.replace("bg-yellow-600", "bg-green-600");
            btnTerminer.classList.replace("hover:bg-yellow-700", "hover:bg-green-700");
        }

        mettreAJourInterface();
    });
    const btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "Supprimer";
    btnSupprimer.classList.add("bg-red-600", "hover:bg-red-700", "text-white", "px-3", "py-1", "rounded", "text-sm", "cursor-pointer");

    btnSupprimer.addEventListener("click", () => {
        const ligneASupprimer = btnSupprimer.parentElement.parentElement;
        ligneASupprimer.remove();
        mettreAJourInterface();
    });
    tdActions.appendChild(btnTerminer);
    tdActions.appendChild(btnSupprimer);

    tr.append(tdNum, tdNom, tdDebut, tdFin, tdActions);
    tbody.appendChild(tr);

    mettreAJourInterface();
}
formTache.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomValeur = inputNom.value.trim();
    if (nomValeur === "") {
        erreurForm.classList.remove("hidden");
        return;
    }
    creerTacheElement(nomValeur, inputDebut.value, inputFin.value);
    formTache.reset();
    erreurForm.classList.add("hidden");
    modaleFormulaire.classList.add("hidden");
});
