const btnInscrire = document.getElementById("inscrire");
const form = document.getElementById("formulaire");
const closeIcon = document.querySelector(".close-icon");


btnInscrire.addEventListener('click', ()=> {
    form.classList.toggle("hidden");
});
closeIcon.addEventListener('click', ()=> {
    form.classList.toggle("hidden"); 
});