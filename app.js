const calcul = document.getElementById("ligne-calcul")  //ecran 
const resultat = document.getElementById("ligne-resultat") //ecran
const boutons = document.querySelector(".boutons") //boutons

//valeur initial
const state = { 
    affiche: '0',
    operation: null,
    calcul: "",
    egal: false
}

//bouton cliqué
boutons.addEventListener("click", function(event) {
   
   const chiffreSelectionne = event.target 
    if (chiffreSelectionne.dataset.chiffre){
        if (state.affiche === "0"){
            state.affiche = ""
        }
        state.affiche += chiffreSelectionne.dataset.chiffre
        
        resultat.textContent = state.affiche
    }  
}