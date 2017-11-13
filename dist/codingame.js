/**
 * Fonction de débug
 */

// Log dans Codingame
// function lg (value) {

// 	if (! DEBUG) return;

// 	if (WWW && console) {
// 		console.log(value);
// 	} else {
// 		printErr(value);
// 	}
// };

// Log dans le navigateur
// if (console) {
// 	var lg = console.log.bind(console);
// }

/**
 * Fonctions mathématiques
 */

/**
 * Distance entre deux entités
 */
Math.distance = function (a, b) {
	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

/**
 * Fonction de distribution
 * Augement les probabilités des extrêmes (0 et 1)
 */
Math.ease = function (x, e) {

	// Par défaut, au carré
	if (typeof(e)==='undefined') e = 2;

	return Math.pow(x,e) / ( Math.pow(x,e) + Math.pow(1 - x, e) );
};

/**
 * Calcul d'un angle entre deux vecteurs
 */
Math.angle = function (a, b) {

    ad = b.x - a.x;
    op = b.y - a.y;
    return Math.atan2( (op) , (ad) );

  	// d = Math.distance(a, b);
  	// dx = (b.x - a.x) / d;
  	// dy = (b.y - a.y) / d;

  	// a = Math.acos(dx);
  	// a = dy < 0 ? 2 * Math.PI - a : a;
  	// return a;

};

/**
 * Conversion d'un angle en radians
 */
Math.radians = function ( degrees ) {
	return degrees * Math.PI / 180;
};

/**
 * Conversion d'un angle en degrés
 */
Math.degrees = function ( radians ) {
	return radians * 180 / Math.PI;
};

var F = [function (x, derivate) {
    var d = 1 + Math.abs(x);
    if (derivate) return x / Math.pow(d, 2);
    return x / d;
  },function (x, derivate) {
    var fx = 1 / (1 + Math.exp(-x));
    if (!derivate) return fx;
    return fx * (1 - fx);
  }];
var A = [0.9291393867445293,0.6394943925672844,1.9756045997759082,0.11012591787048848,0.6761368732704229,0.9885489789097823];
var S = [0,0,0,0.12375449525055485,0.736074552629344,4.458159285894186];
function activate(input){
for(var i = 0; i < input.length; i++) A[i] = input[i];
S[3] = A[1] * 0.08506741989675232 + 0.06935435723641512;
A[3] = F[0](S[3]);
S[4] = A[2] * -0.06562645571315709 + A[1] * 0.08506741989675232 + A[0] * 0.3310850559794747 + 0.5037021765160601;
A[4] = F[1](S[4]);
S[5] = A[3] * 0.04714590172542832 + A[2] * 1.869522569501131 + A[0] * 1.6659582448839672 + -0.7883775094919496;
A[5] = F[1](S[5]);
return [A[4],A[5]];
}
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




