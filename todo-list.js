const ajouterTache =  document.getElementById("addTache");
const form = document.getElementById("formulaire");
ajouterTache.addEventListener('click', ()=> {
    form.classList.remove('hidden');
})