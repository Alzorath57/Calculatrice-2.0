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

//action de la calculatrice
boutons.addEventListener("click", function (event) {
  const boutonSelectionner = event.target;
  if (boutonSelectionner.dataset.chiffre) {
    gererChiffre(boutonSelectionner.dataset.chiffre);
  }
  if (["+", "-", "*", "/"].includes(boutonSelectionner.dataset.action)) {
    gererOperateur(boutonSelectionner.dataset.action);
  }
  if (["="].includes(boutonSelectionner.dataset.action)) {
    gererEgal(boutonSelectionner.dataset.action);
  }
  if (["C", "CE", "⌫"].includes(boutonSelectionner.dataset.action)) {
    gererAction(boutonSelectionner.dataset.action);
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
  state.calcul = state.affiche + " " + operateur;
  state.affiche = "0";
  calcul.textContent = state.operation;
}

// égal
function gererEgal(egal) {
  const nombre1 = parseFloat(state.calcul); // premier chiffre
  const nombre2 = parseFloat(state.affiche); // deuxième chiffre
  let resultatFinal = 0;

  if (state.operation === "+") {
    resultatFinal = nombre1 + nombre2;
  }
  if (state.operation === "-") {
    resultatFinal = nombre1 - nombre2;
  }
  if (state.operation === "*") {
    resultatFinal = nombre1 * nombre2;
  }
  if (state.operation === "/") {
    if (nombre2 === 0) {
      resultat.textContent = "Désolé... Nous ne pouvons pas diviser par zéro";
      return;
    } else {
      resultatFinal = nombre1 / nombre2;
    }
  }

  resultat.textContent = resultatFinal;
}

// C , CE , ⌫
function gererAction(action) {
  if (["C"].includes(action)) {
    state.affiche = "0";
    state.calcul = "";
    state.operation = null;
    state.egal = false;
  }
  if (["CE"].includes(action)) {
    state.affiche = "0";
  }
  if (["⌫"].includes(action)) {
    state.affiche = state.affiche.slice(0, -1);
    if (state.affiche === "") {
      state.affiche = "0";
    }
  }
  resultat.textContent = state.affiche;
  calcul.textContent = state.calcul;
}
