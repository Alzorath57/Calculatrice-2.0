const calcul = document.getElementById("ligne-calcul"); //ecran
const resultat = document.getElementById("ligne-resultat"); //ecran
const boutons = document.querySelector(".boutons"); //boutons

//valeur initial
const state = {
  affiche: "0",
  operation: null,
  calcul: "",
  egal: false,
};

//bouton cliqué
boutons.addEventListener("click", function (event) {
  const boutonSelectionner = event.target;
  if (boutonSelectionner.dataset.chiffre) {
    gererChiffre(boutonSelectionner.dataset.chiffre);
  }
});

// affiche le premier chiffre
function gererChiffre(chiffre) {
  if (state.affiche === "0") {
    state.affiche = "";
  }
  state.affiche += chiffre;
  resultat.textContent = state.affiche;
}

// ajoute l'opérateur
function gererOperateur(operateur) {
  if (state.operation === null) {
    state.operation = "";
  }
  state.operation += operateur;
  state.calcul = state.affiche + operateur;
  state.affiche = "0";
  calcul.textContent = state.operation;
}
