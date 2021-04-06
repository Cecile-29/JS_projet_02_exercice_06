// *******************Correction******************************
// dans les deux fonctions on passe en paramètre (image) elle s'applique a tous
// les éléments du document déclenchés au survol de la souris puis en dehors pour onmouseout
// la valeur src permet de traiter la variable de manière générique
// de cette façon, ici la fonction changePicture renvoie une source : qui concatène le chemin local
// de élément et + son id  et + l'extension qui est _2.jpeg pour
//puis la fonction returnPicture renvoie une source : qui concatène le chemin local
// de élément et + son id  et + l'extension qui est .jpeg état initial avant survol
function changePicture(image){
document.getElementById(image).src="./img/" + image + "_2.jpg";
}
function returnPicture(image){
document.getElementById(image).src="./img/" + image + ".jpg";
}


// ****************************** Correction Adéle *****************************************
// avec le gestionnaire d'événements addEventListener on écoute l'événement onmouseover
// et on appelle la fonction sur un élément via l'ID changePicture on en change le chemin de source
// cela s'applique a l'ID "image1"
// let image = document.getElementById("image1").addEventListener('mouseover', changePicture)
//
// function changePicture(){
//   document.getElementById("image1").src="./image3.jpg"
// }
