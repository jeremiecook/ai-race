/**
 * AI Codingame
 */

var DEBUG = true;

function lg (value) {
	if (DEBUG) printErr(value);
};



function Game () {

	this.x = undefined;
	this.y = undefined;
	this.angle = undefined;

}

Game.prototype = {

	/**
	 * Tour de jeu
	 */
	play: function () {

		// Lecture des informations en début de tour
		var data = this.read();

	    // Valeur de l'angle au départ
	    if (this.angle === undefined) {
	    	this.angle = Math.angle(
	    		{x: data.player.x, y: data.player.y},
	    		{x: data.next.x, y: data.next.y}
	    	);
	    }

	    // Calcul de la vitesse
	    var vx = (this.x === undefined) ? 0 : Math.round((data.player.x - this.x) * .85);
	    var vy = (this.y === undefined) ? 0 : Math.round((data.player.y - this.y) * .85);

	    // Données pour le réseau de neurones
	    var speed = Math.round(Math.sqrt ( Math.pow(vx, 2) + Math.pow(vy, 2)));
	    var distance = data.next.distance;
	    var angle = data.next.angle; // Degrés

		// Normalisation des données
		speed = Math.min(500, speed) / 500 ;
		distance = Math.min( distance, 8000) / 8000;
		angle = ((angle + 360) % 360)  / 360;

		// Résultat du réseau de neurones (normalisé)
		var input = [speed, distance, angle];
		lg(input);

		var output = activate(input);
		lg(output);

		// On normalise les valeurs récupérées
		var angle = ( output [0]
					  * Math.PI * 2 // En radians
					  - Math.PI  ) // Droite ou gauche
					  * .1; // 36 / 360 : + ou - 18 degrés

		var thrust = Math.round (
						Math.ease(output [1], 2) // Préférence à la full accelération
						* 100 // Accélération max 200
					);


	    //lg(Math.degrees(oa));

	    // Mise à jour des informations
	    this.x = data.player.x;
	    this.y = data.player.y;
	    this.angle += angle;

	    // Calcul des coordonnées cible
	    tx = this.x + Math.round(1000 * Math.cos(this.angle));
	    ty = this.y + Math.round(1000 * Math.sin(this.angle));

	    // On joue notre coup
	    lg([tx, ty, thrust]);
	    this.write(tx, ty, thrust);

	},

	/**
	 * Lecture des informations de jeu
	 */
	read: function () {

	    var inputs = readline().split(' ');

	    var data = {};

	    data.player = {
	    	x: parseInt(inputs[0]),
	        y: parseInt(inputs[1]),
	    };

	    data.next = {
	    	x: parseInt(inputs[2]),
	        y: parseInt(inputs[3]),
	        distance: parseInt(inputs[4]),
	        angle: parseInt(inputs[5]),
	    };

	    var inputs = readline().split(' ');
	    var opponentX = parseInt(inputs[0]);
	    var opponentY = parseInt(inputs[1]);

	    return data;

	},

	/**
	 * Ecriture du résultat en sortie
	 */
	write: function (x, y, thrust) {
		print(x + ' ' + y + ' ' + thrust);
	},


};



/**
 * Execution de l'AI
 */
game = new Game();

while (true) {
	game.play();
}




