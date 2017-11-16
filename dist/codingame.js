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

var TWO_PI = Math.PI * 2;

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
    if (derivate) return x < 0 ? -1 : 1;
    return Math.abs(x);
  },function (x, derivate) {
    if (derivate) return x > -1 && x < 1 ? 1 : 0;
    return Math.max(-1, Math.min(1, x));
  },function (x, derivate) {
    return derivate ? 0 : x > 0 ? 1 : -1;
  },function (x, derivate) {
    if (derivate) return x > 0 ? 1 : 0;
    return x > 0 ? x : 0;
  },function (x, derivate) {
    var d = 1 + Math.abs(x);
    if (derivate) return x / Math.pow(d, 2);
    return x / d;
  },function (x, derivate) {
    if (derivate) return -1;
    return 1 - x;
  },function (x, derivate) {
    var fx = 1 / (1 + Math.exp(-x));
    if (!derivate) return fx;
    return fx * (1 - fx);
  }];
var A = [0.99,0.59275,0.9986020466910075,0.2551452665663878,-1,-1,0.47082202680729246,3.374675407084256,-0.8724936237458645,1.3127220938926487,2.24435076581496,-0.322652277894016,7.705356019313237,0.999979844967227,0.9993587730962022];
var S = [0,0,0,-0.2551452665663878,-4.062415384834286,-0.5492733626475477,-0.47082202680729246,3.374675407084256,-6.842745040505893,-1.3127220938926487,2.24435076581496,-0.4763465903315327,-6.705356019313237,10.812036380115114,7.351485747019659];
function activate(input){
for(var i = 0; i < input.length; i++) A[i] = input[i];
S[3] = A[0] * 1.221850263533507 + -1.4647770274645597;
A[3] = F[0](S[3]);
S[4] = A[2] * -4.116740206166671 + 0.04856981073891231;
A[4] = F[1](S[4]);
S[5] = A[4] * 0.6932600578459444 + 0.14398669519839669;
A[5] = F[2](S[5]);
S[6] = A[1] * 1.8062669614722955 + -1.5414867682199955;
A[6] = F[0](S[6]);
S[7] = A[6] * 2.4672814009511015 + 2.2130249771845225;
A[7] = F[3](S[7]);
S[8] = A[5] * 1.1088565247257516 + A[3] * -2.7255593428662377 + A[2] * -3.0028448613686147 + A[0] * -2.2030991359038907 + 0.14124021830109845;
A[8] = F[4](S[8]);
S[9] = A[8] * 1.7622879257532844 + A[1] * -1.087717908599942 + 0.8696076748540329;
A[9] = F[0](S[9]);
S[10] = A[9] * -1.1639166394407212 + A[8] * 0.04840385620420795 + A[7] * 1.4641291963285228 + -1.12647888188294;
A[10] = F[3](S[10]);
S[11] = A[10] * 0.42425882941783555 + -1.4285322190392105;
A[11] = F[4](S[11]);
S[12] = A[11] * -1.0290694155702642 + A[10] * -2.0838731955036347 + A[7] * 0.1011736049517975 + A[0] * -2.92772679192147 + 0.1965762393571704;
A[12] = F[5](S[12]);
S[13] = A[12] * 0.4557692950557697 + A[8] * -0.6607892868431344 + A[5] * -6.332329610002173 + 0.3913076496266039;
A[13] = F[6](S[13]);
S[14] = A[7] * 0.26343777370908283 + A[3] * 2.4128900366980166 + A[2] * 2.000128762687116 + A[0] * 2.6946226007760066 + 1.1818222483447394;
A[14] = F[6](S[14]);
return [A[13],A[14]];
}var network = {activate};
/**
 * Joueur / Vaisseau
 * Basé sur un réseau de neurones
 */

function Player (genome) {

	this.radius = 400;

	// this.x      = board.checkpoints[0].x;
	// this.y      = board.checkpoints[0].y;

	this.x = 12363;
	this.y = 5877;

	this.vx     = 0;
	this.vy     = 0;

	//this.angle  = Math.radians(149.0089684242014);
	this.angle = Math.angle(this, board.checkpoints[1]);

	this.genome = genome;
	this.genome.score = 0;
	this.checkpoint = 0;
	this.turn = 0; // Tour de jeu

}

Player.prototype = {


	play: function () {

		// Récupération des paramètres
		var input = this.normalize();
		lg(input);

		// Valeurs fournies par le génome
		var output = this.genome.activate(input);
		lg(output);

		// On "dénormalise" les valeurs récupérées
		var angle = ( output [0]
					  * Math.PI * 2 // En radians
					  - Math.PI  ) // Droite ou gauche
					  * .1; // 36 / 360 : + ou - 18 degrés

		var thrust = Math.round (
						Math.ease(output [1], 2) // Préférence à la full accelération
						* 100 // Accélération max 200
					);

		lg([Math.degrees(angle), thrust]);

		return {angle:angle, thrust:thrust};

	},

	/**
	 * Simulation d'un tour de jeu
	 */
	simulate: function () {

		// Nouveau tour de jeu
		this.turn++;

		// Cible : prochain checkpoint
		this.target = board.getCheckpoint(this.checkpoint + 1);

		// Récupérer le mouvement du joueur
		var move = this.play();

		// Déplacement du vaisseau
		this.move(move.angle, move.thrust);

		// Checkpoint atteint ? Nouvelle cible
		if ( Math.distance (this, this.target) < 590 ) {
			this.checkpoint ++;
		}

		// Mise à jour du score dans le genome
		var score = ( this.genome.score * (this.turn - 1) // Tour précédent
					  + this.score()) / this.turn;

		this.genome.score = this.score();
		if (this.genome.score > bestScore) bestScore = this.genome.score;

	},

	/**
	 * Normalise les paramètres du réseau de neurones
	 */
	normalize: function () {

		// Résultat du réseau de neurones
		// Paramètres pour le réseau de neurones
		var speed = Math.round(Math.sqrt ( Math.pow(this.vx, 2) + Math.pow(this.vy, 2))) ;
		var distance = Math.round(Math.distance(this, this.target));

		var angle = this.angle - Math.angle(this, this.target); // Calcul de l'angle vers la cible
		    angle = ((angle + TWO_PI) % TWO_PI) - Math.PI; // Borné sur -Pi à Pi

		//lg([speed, distance, Math.degrees(angle)]);

		// Paramètres normalisés
		var speed = Math.min(speed, 500) / 500 ;
		var distance = Math.min( distance , 8000) / 8000;
		var angle = angle / (TWO_PI) + 0.5; // 0: -Pi, 0.5: 0, 1: Pi

		//lg([speed, distance, angle]);

		// Résultat du réseau de neurones (normalisé)
		var input = [speed, distance, angle];

		return input;

	},



	/**
	 * Déplacement du vaisseau
	 */
	move: function (angle, thrust) {

		//lg([angle, thrust]);

		// On ajoute l'angle de rotation
		this.angle += angle;


		// Coup proposé sur CG
		tx = this.x + Math.round(1000 * Math.cos( this.angle ));
		ty = this.y + Math.round(1000 * Math.sin( this.angle ));
		lg([tx, ty, thrust]);


		// Calcul des vecteurs de vitesse
		this.vx += Math.round(thrust * Math.cos( this.angle ));
		this.vy += Math.round(thrust * Math.sin( this.angle ));

		//console.log(this.x + Math.round(1000 * Math.cos( this.angle )))
		//console.log(this.y + Math.round(1000 * Math.sin( this.angle )))

		// Déplacement du vaisseau
		this.x += this.vx;
		this.y += this.vy;


		// Frottements en fin de tour (.85)
		this.vx = Math.round( this.vx * .85);
		this.vy = Math.round( this.vy * .85);

	},

	/**
	 * Calcul du score du joueur
	 */
	score: function () {

		// Checkpoints déjà atteints
		a = this.checkpoint;

		checkpoint = board.getCheckpoint(this.checkpoint);
		target     = board.getCheckpoint(this.checkpoint + 1);

		// Ratio de distance jusqu'au prochain checkpoint (0 = proche)
		b = Math.distance(this, target) / Math.distance(checkpoint, target);
		b = Math.min(b, 10); // Au delà de deux fois la distance, score = 0;
		b = (10 - b) / 10; // On normalise

		return (a + b);
	},

	/**
	 * Affiche le board à l'écran
	 */
	display: function () {

		// Si le checkpoint n'existe pas, on le crée
		if ( ! this.html ) {

			this.html = $ ("<div class='player'><span></span></div>");

			$BOARD.append(this.html);
		}

		var opacity = Math.round(this.genome.score / bestScore * 10) / 10;
		//lg(opacity);

		// On positionne le checkpoint sur la carte
		this.html.css ({
			width:  this.radius * 2 * TO_PIXEL,
			height: this.radius * 2 * TO_PIXEL,
			left: Math.round(this.x * TO_PIXEL),
			top:  Math.round(this.y * TO_PIXEL),
			opacity: opacity,
		});

		this.html.find("span").css ({
			transform: 'rotate(' + Math.degrees(this.angle) + 'deg)'
		});
	},

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

	// Initialisation d'un joueur avec un génome
	var network = {activate};
	this.player = new Player(network);

}

Game.prototype = {

	/**
	 * Tour de jeu
	 */
	play: function () {

		// Lecture des informations en début de tour
		var data = this.read();

	    // Mise à jour de l'angle
	    if (this.angle === undefined) {
	    	this.angle = Math.angle(
	    		{x: data.player.x, y: data.player.y},
	    		{x: data.next.x, y: data.next.y}
	    	);
	    }

	    // Calcul de la vitesse
	    this.player.vx = (this.x === undefined) ? 0 : Math.round((data.player.x - this.x) * .85);
	    this.player.vy = (this.y === undefined) ? 0 : Math.round((data.player.y - this.y) * .85);

	    // Mise à jour des coordonnées
	    this.player.x = data.player.x;
	    this.player.y = data.player.y;

	    // Données pour le réseau de neurones
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


		var move = this.player.play();


	    // Mise à jour des informations
	    this.x = data.player.x;
	    this.y = data.player.y;
	    this.angle += move.angle;

	    // Calcul des coordonnées cible
	    tx = this.x + Math.round(1000 * Math.cos(this.angle));
	    ty = this.y + Math.round(1000 * Math.sin(this.angle));

	    // On joue notre coup
	    lg([tx, ty, move.thrust]);
	    this.write(tx, ty, move.thrust);

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




