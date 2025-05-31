
//let name=prompt("Quel est ton nom?") C'est le fait de créer une variable avec let quipermet de retrouver la valeur dans la cosole avec name


//1ere facon avec plusiuers repetitions de code


// function addition(nombre1,nombre2){// les variables nombre 1 et nombre 2 ne serront initialises que lorsque je vais appeller ma fonction
//     let resultat=nombre1+nombre2
//     console.log(resultat);
    
// }
// function soustraction(nombre1,nombre2){
//     let resultat=nombre1-nombre2
//     console.log(resultat);
    
// }
// function multiplication(nombre1,nombre2){
//     let resultat=nombre1*nombre2
//     console.log(resultat);
    
// }
// function division(nombre1,nombre2){
//     let resultat=nombre1/nombre2
//     console.log(resultat);
//Ici pour afficher dans la console on n'utilise pas les boutons.On appelle la fonction
//  dans la console directement.Exemple addition(5,2).Le reseultat affiche 7 dans la console
// }



// 2e facon en recuperant les valeurs des parametres avec le DOM

// function addition(){
//         const nombre1 = parseInt(document.getElementById("nombre1").value)  
//         const nombre2 = parseInt(document.getElementById("nombre2").value)
//     let resultat=nombre1+nombre2
//     console.log(resultat);
    
// }
// function soustraction(){
//     const nombre1=document.getElementById("nombre1").value
//     const nombre2=document.getElementById("nombre2").value
//     let resultat=nombre1-nombre2
//     console.log(resultat);
    
// }
// function multiplication(){
//     const nombre1=document.getElementById("nombre1").value
//     const nombre2=document.getElementById("nombre2").value
//     let resultat=nombre1*nombre2
//     console.log(resultat);
    
// }
// function division(){
//     const nombre1=document.getElementById("nombre1").value
//     const nombre2=document.getElementById("nombre2").value
//     let resultat=nombre1/nombre2
//     console.log(resultat);
    
// }

// 3e facon en eliminant les repetitions.Au lieu d'avoir les parametres definis dans la fonction ,
// on va plutot les recuperer grace au DOM afin de respecter le principe DRY (Do not repeat yourself)
//Mais on affiche toujours dans la console

// function recuperer_valeur(){// cette fonction sera appellée par la suite
//         const nombre1 = parseFloat(document.getElementById("nombre1").value) // j'ai converti 
//         // parce qu'avaec l'addition ce sera consider comme un string
//         const nombre2 = parseFloat(document.getElementById("nombre2").value)
//              return[nombre1,nombre2]
    
// }function addition(){
//     const[nombre1,nombre2]=recuperer_valeur()//pour appeller la fonction recuperer_valeur j'initialise 
//     // une variable constante

//    let resultat=nombre1+nombre2
//   console.log(resultat);
  

// }function soustraction(){
//     const[nombre1,nombre2]=recuperer_valeur()

//    let resultat=nombre1-nombre2
//   console.log(resultat);

// }function multiplication(){
//     const[nombre1,nombre2]=recuperer_valeur()

//    let resultat=nombre1*nombre2
//   console.log(resultat);

// }function division(){
//     const[nombre1,nombre2]=recuperer_valeur()

//    let resultat=nombre1/nombre2
//   console.log(resultat);
// }

//4e facon .On fait apparaitre le resultat dans la page web en recuperant le resultat avec le DOM

// function recuperer_valeur(){// cette fonction sera appellée par la suite
//         const nombre1 = parseFloat(document.getElementById("nombre1").value) // j'ai converti 
//         // parce qu'avaec l'addition ce sera consider comme un string
//         const nombre2 = parseFloat(document.getElementById("nombre2").value)
//              return[nombre1,nombre2]
    
// }function addition(){
//     const[nombre1,nombre2]=recuperer_valeur() 
//     // une variable constante

//    let resultat=nombre1+nombre2
//   console.log(resultat);
//   document.getElementById("résultat").textContent=resultat// on recupere l'id pour mettre dans la variable résultat
  

// }function soustraction(){
//     const[nombre1,nombre2]=recuperer_valeur()

//    let resultat=nombre1-nombre2
//   console.log(resultat);
//   document.getElementById("résultat").textContent=resultat

// }function multiplication(){
//     const[nombre1,nombre2]=recuperer_valeur()

//    let resultat=nombre1*nombre2
//   console.log(resultat);
//   document.getElementById("résultat").textContent=resultat

// }function division(){
//     const[nombre1,nombre2]=recuperer_valeur()

//    let resultat=nombre1/nombre2
//   console.log(resultat);
//   document.getElementById("résultat").textContent=resultat
//   }

//5e facon en reduisant la repetition avec la condition switch.Ici on crée une nouvelle fonction calculer

function recuperer_valeur(){// cette fonction sera appellée par la suite
        const nombre1 = parseFloat(document.getElementById("nombre1").value) // j'ai converti 
        // parce qu'avaec l'addition ce sera consider comme un string
        const nombre2 = parseFloat(document.getElementById("nombre2").value)
             return[nombre1,nombre2]
 
  
    
}

function calculer(operateur){
  const[nombre1,nombre2]=recuperer_valeur()

  console.log(nombre1,nombre2);//me permet de verifier dans la console que les valeurs sont bonnes
  console.log(operateur)//me permet de verifier dans la console que j'ai recuperé le bon opérateur

if (isNaN(nombre1) ||isNaN(nombre2)) {
    return "Veuillez entrer des nombres valides";
}

  if (operateur === '/' &&// je ne vois l'impact de cette fonction
nombre2 === 0) {
 return "Erreur : Division par zéro impossible";
}

  let resultat;
  switch(operateur){
    case "addition":
    resultat=nombre1+nombre2
    break

     case "soustraction":
    resultat=nombre1-nombre2
    break

     case "multiplication":
    resultat=nombre1*nombre2
    break

     case "division":
    resultat=nombre1/nombre2
    break
    default:
      console.log("operateur non reconnu");
      

  }
  console.log(resultat);
  
document.getElementById("résultat").textContent=resultat
}

//Types de paramètres
//Paramètre positionnel
function abc(nom, age){
  let phrase="Tu t'appelles "+ nom+ " et tu es agé de "+ age+'ans'
    console.log(phrase);// pourquoi les virgules et non 
    // le + pour concatener?
document.getElementById("para").textContent=phrase
}

abc("Yvert", 10)

function paragraphe(utilisateur="admin"){
  let nom_parat=utilisateur;
  console.log(utilisateur);
document.getElementById('parat').textContent=nom_parat
  
}
paragraphe('nicaise')// si on laisse les parentheses vides il prend la valeur par defaut admin

// //Paramètre par defaut
// function saluer(nom="Jane"){
//     console.log(nom);
// }

// saluer()
// saluer("Georges")

//Q1: comment modifier plusieurs elements au meme moment?
//Q2Pourquoi les parametres nombre1 et nombre2 ont été consiferes comme 
// des nombres par defaut,pourquoi pas des string?
//Q3Pourquoi utiliser [] pour le return et non les parentheses?
//Q4: 