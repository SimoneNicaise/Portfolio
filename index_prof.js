//let nom = prompt("Quel est ton nom ? :")
function recuperer_valeur(){
    const nombre1 = parseFloat(document.getElementById("nombre1").value)
    const nombre2 = parseFloat(document.getElementById("nombre2").value)
    x=4
    return [nombre1, nombre2]
}

let x = 3;
function calculer(operateur){
    x=65
    const [nombre1, nombre2] = recuperer_valeur()
    console.log(operateur);
    if (isNaN(nombre1) || isNaN(nombre2)) {
        return "Veuillez entrer des nombres valides";
    }
    let resultat;
    switch (operateur){
        case "addition":
            resultat = nombre1 + nombre2
            break
        case "soustraction":
            resultat = nombre1 - nombre2
            break;
        case "multiplication":
            resultat = nombre1 * nombre2
            break;
        case "division":
            if (nombre2 === 0) {
                return "Erreur : Division par zéro impossible";
            }
            resultat = nombre1 / nombre2
            break;
        default:
            console.log("Operateur non reconnu");
            
    }
    console.log(resultat);
    document.getElementById("resultat").textContent = resultat
}

function addition(){
    const [nombre1, nombre2] = recuperer_valeur()
    let resultat = nombre1 + nombre2
    console.log(resultat);
    document.getElementById("resultat").textContent = resultat
}

function soustraction(){
    const [nombre1, nombre2] = recuperer_valeur()
    let resultat = nombre1 - nombre2
    console.log(resultat);
    document.getElementById("resultat").textContent = resultat
}
function multiplication(){
    const [nombre1, nombre2] = recuperer_valeur()
    let resultat = nombre1 * nombre2
    console.log(resultat);
    document.getElementById("resultat").textContent = resultat
}
function division(){
    const [nombre1, nombre2] = recuperer_valeur()
    let resultat = nombre1 / nombre2
    console.log(resultat);
    document.getElementById("resultat").textContent = resultat
}

//Types de paramètres
//Paramètre positionnel
function abc(nom, age){
    console.log("Tu t'appelles ", nom, " et tu es agé de ", age);
}

abc("Jane", 60)

//Paramètre par defaut
function saluer(nom="Jane"){
    console.log(nom);
}

saluer()
saluer("Georges")