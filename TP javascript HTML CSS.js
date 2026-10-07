//Modification du titre de la page
let titre = document.querySelector("#titre");
titre.textContent = "Mon Profil avec JavaScript"; 

//Modification du theme dU Bouton
const boutonTheme = document.querySelector("#boutonTheme");
boutonTheme.addEventListener("click", function() {
    document.body.classList.toggle("red-theme");
});  

//Modification du texte de présentation
let presentation = document.querySelector("p");
presentation.textContent = "Je m'appelle Aymane et j'aime apprendre de nouvelles choses.";

//créer le bouton afficher/masquer le texte de présentation
const bouton = document.queryselector("#boutonPresentation");   