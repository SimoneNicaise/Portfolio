//Variables. Syntaxe : let nom_de_la_variable =  valeur ;
let x= 10;

var y = 20;

const pi = 3.14;

//Types de donnees
//1- Les strings
let name= "mon nom";

//2- Les nombres

let age = 16;

//3- Les booleens ==> Soit true ou false

let permis_de_conduire = true;

//User-interface functions

//alert();
//console.log();
//prompt();
//confirm();

//Operations mathematiques
// + -  /, *, i=i+1 ===> i+=1 ==> i++ ;+= , -=, *=, % ==> modulos
// Pour comparaison: == , <, >, <=, >=, !=
console.log(2 == 2);
console.log("A"<"a");
// De liaison: &&, ||

//Les structures de controle
//Les conditions
let rain=true;
if (rain == true) {
    alert("Il faut  se munir d'un parapluie")
}else if (rain==false){
    alert("Ce n'est pas necessaire de prendre un parapluie, Il fait beau");
} else if (12 >45){
    console.log();
}
else{
    console.log("Erreur interne");
}

// Condition switch
switch (rain){
    case true :
        alert("Il faut  se munir d'un parapluie")
    case false :
        alert("Ce n'est pas necessaire de prendre un parapluie, Il fait beau");
    default :
        console.log("Execution par defaut");
}
     


//Les boucles (loop)
//for loop
for (let i=0; i<=10; i++){
    console.log(i); 
}
 //while loop pour avoir tous les nombres pairs
 let i = 0;
 while (i<=10){
    console.log(i);
    i+=2; 
}
//Determiner les nombres pairs
for (let i=0; i<=20; i++){ 
    if (i%2==0){
        console.log(i);
    }
}

//Les fonctions
//Declarer la fonction
function ma_fonction(){
    console.log("mon nom");
}
//Appeller la fonction
ma_fonction();

//Fonction avec arguments/parametres
function hello(name){
    alert(`Hello to ${name}`);
}
//Ressources: https://www.learn-js.org/

//------- DOM Document Object Model----------------
/*Création d’éléments
document.createElement(tagName): Crée un nouvel élément HTML avec le nom de tag(balise) spécifié.
element.appendChild(child): Ajoute un élément enfant à un élément parent.
element.removeChild(child): Supprime un élément enfant d’un élément parent.
Accès aux éléments
document.getElementById(id): Renvoie un élément avec l’ID spécifié.
document.querySelector(selector): Renvoie le premier élément qui correspond au sélecteur spécifié.
element.parentNode: Renvoie le parent direct de l’élément.
element.children: Renvoie une liste des enfants de l’élément.

Modification de contenu
element.innerHTML: Accède ou modifie le contenu HTML de l’élément.
element.textContent: Accède ou modifie le contenu texte de l’élément.

Modification des Attributs
element.setAttribute("class",
"nouvelle-classe"); pour la classe  et element.id = "nouvel-id"; pour l'id

Modification du Style
element.style.color = "red";
element.style.backgroundColor= "#f0f0f0";
document.body.style.backgrougColor="#000"


Événements
element.addEventListener(eventType, handler): Ajoute un gestionnaire d’événement à un élément 
pour répondre à un événement spécifié (par exemple, un clic).
element.removeEventListener(eventType, handler): Supprime un gestionnaire d’événement d’un élément.
Autres
document.body: Renvoie le corps du document HTML.
document.documentElement: Renvoie l’élément racine du document HTML (par exemple, <html>).
element.classList: Gère les classes CSS d’un élément.
element.style: Gère les styles CSS d’un élément.
Exemples
const addButton = document.createElement('button');
const addButton.addEventListener('click', function() { ... });
const paragraph = document.createElement('p'); paragraph.textContent = 'Bonjour';
const ul = document.createElement('ul'); const li = document.createElement('li'); ul.appendChild(li);

//Type de donnees 
//1)Données primitives : integer,booleen,etc
//2)Données complexes : listes (),dictionnaires,
 //les listes contiennt un ensembles de onnées primitivitves.Elle s'appui sur un systeme d'indexation parce ce sont
 // des listes ordonnées avec des positions.Les indexes commencent a 0.Ex: var ma_liste= [12,1.5,"hello",true]
// les dictionnaires sont des objets.Il s'agit d'un ensemeble paire clé-valeur.Ex:{"age":56,"nom":"jean"}.Pour acceder
//à une valeur on va devoir passer par sa clé

//Les classes regroupent les variables qui sont appelés objet.les methodes sont des fonctions crées 
// à l'intérieur d'une classe.Voila pourquoi pour appeler une methode il faut les objets d'une classe.
Les classes sont des elements abstraits.Elles ne font pas quelque chose.Elle represente la structure.LA classe est 
le plan de la maison et les objets la maison construite


Dans CSS il y a une facon de colorer les boutons
--num-bg → Fond des boutons numériques (0-9).

--num-color → Couleur du texte des chiffres.

--op-bg → Fond des boutons d'opérateurs (+, -, ×, ÷).

--eq-bg → Fond du bouton "=" (généralement vert pour le distinguer).

--clr-bg → Fond du bouton de suppression/réinitialisation (généralement rouge pour indiquer une action critique).






Ressources  
MDN Web Docs: Document Object Model (DOM)
W3C: Document Object Model (DOM)
*/

//---------------ReactJS---------------------
//Node est consider comme une bibliothque backend alors que react comme une frontend
//node -v
//npm -v

//Creation d'une application React (Le nom de l'appli doit etre en minuscule)
//npx create-react-app nom-de-l-appli
//Ensuite vous vous deplacer dans votre appli (cd nom-de-l-appli)
//Et vous pouvez lancer l'appli avec la commande suivante
//npm start

//Elle sera visible dans le navigateur a cette addresse


//Un iterable est un element qu'on peut parcourir,un ensemble d'objes(string;liste,dictionnaire...)


//MAP dans la console
//let ma_liste=["Albert","Issaka","Ousman","Landry"]
// let liste2=ma_liste.map((nom) => nom+" IT")
// liste2

//FOR dans la console
// let my_string="Hello everybody"
// for (let index = 0; index <my_string.length; index++) {
 //   console.log(index)
//}

// for (let i = 0; i <my_string.length; i++) {
 //   console.log(i,my_string[i]);
//}
// 
// 
// 
// 
// 
// 
// ,,m,m,m

