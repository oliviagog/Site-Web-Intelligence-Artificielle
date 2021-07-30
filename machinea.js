// SCRIPT "MACHINE A ECRIRE" FONCTIONNANT SUR LE TITRE DANS L'INDEX

function extraire() {
	if (++i < message.length) { // On incremente i et on compare a la taille du message.
		// Si i ne depasse pas le nombre de caracteres dans le message
		// Note : le premier caractere de la chaine commence a l'index 0
		if (message[i] == '\n') {
			// Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
			document.getElementById("msg").innerHTML += '<br/>';
		} else {
			// Sinon on ajoute simplement le caractere a l'emplacement courant.
			document.getElementById("msg").innerHTML += message[i];
		}
	} else {
		// Sinon on arrete le timer car le texte a fini de s'afficher.
		clearTimeout(interval);
	}
}
var i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
var message = "L' Intelligence Artificielle"; // Message a afficher, on utilise le caractere \n pour le retour a la ligne.
var interval = setInterval(extraire, 120); // On declanche le timer et on le garde dans une variable pour l'arreter plus tard.