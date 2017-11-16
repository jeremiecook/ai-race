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
    if (derivate) return -1;
    return 1 - x;
  },function (x, derivate) {
    if (derivate) return 1 - Math.pow(Math.tanh(x), 2);
    return Math.tanh(x);
  },function (x, derivate) {
    return derivate ? 0 : x > 0 ? 1 : 0;
  },function (x, derivate) {
    if (derivate) return x < 0 ? -1 : 1;
    return Math.abs(x);
  },function (x, derivate) {
    return derivate ? 1 : x;
  },function (x, derivate) {
    if (derivate) return x > 0 ? 1 : 0;
    return x > 0 ? x : 0;
  },function (x, derivate) {
    if (derivate) return x > -1 && x < 1 ? 1 : 0;
    return Math.max(-1, Math.min(1, x));
  },function (x, derivate) {
    if (derivate) return Math.cos(x);
    return Math.sin(x);
  },function (x, derivate) {
    var fx = 1 / (1 + Math.exp(-x));
    if (!derivate) return fx;
    return fx * (1 - fx);
  }];
var A = [0.868,1,0.9335982383458148,4.278985602325044,0.10029469954082083,0,0.30765172202874436,5.984066065853471,-1.2724547520322589,2.1420570525979663,-0.8469094739298213,0.6902156932553483,1,0.7069527520542316,0.995140188251718];
var S = [0,0,0,-3.278985602325044,0.10063303290511025,-0.017233712515393407,-0.30765172202874436,-4.984066065853471,-1.2724547520322589,2.1420570525979663,-0.8469094739298213,2.379805561173341,0.08551956488746426,0.880629983081467,5.321883917708674];
function activate(input){
for(var i = 0; i < input.length; i++) A[i] = input[i];
S[3] = A[1] * -1.8864426362634992 + A[0] * -2.328794089296298 + 0.6288503034476418;
A[3] = F[0](S[3]);
S[4] = A[1] * -0.042940058268747444 + 0.1435730911738577;
A[4] = F[1](S[4]);
S[5] = A[1] * -0.3076509636757202 + A[0] * 0.9545128684769524 + -0.5380999186776678;
A[5] = F[2](S[5]);
S[6] = A[5] * -0.9320940840020379 + -0.30765172202874436;
A[6] = F[3](S[6]);
S[7] = A[3] * -1.3591552332769692 + A[2] * 1.0169660012053061 + -0.11769805851944493;
A[7] = F[0](S[7]);
S[8] = A[7] * -0.004921857584332945 + A[5] * 0.14617166892334027 + A[2] * -0.29814583691070806 + -0.964653602970913;
A[8] = F[4](S[8]);
S[9] = A[8] * -0.5975648532192057 + 1.3816828154717284;
A[9] = F[5](S[9]);
S[10] = A[9] * -0.5333039961875713 + 0.2954581122824447;
A[10] = F[6](S[10]);
S[11] = A[10] * -0.06202403972465618 + A[7] * 0.3895117181278305 + -0.0035870403819024538;
A[11] = F[7](S[11]);
S[12] = A[2] * 1.1317203509002491 + -0.9710525610131158;
A[12] = F[2](S[12]);
S[13] = A[12] * -0.028227023085054717 + A[11] * -0.0040418310490211995 + A[6] * 0.28413615756753297 + A[2] * 0.2938512868615537 + A[0] * 0.9121248212892985 + -0.24183162540894765;
A[13] = F[8](S[13]);
S[14] = A[11] * 1.7190912934652685 + A[6] * -0.07747493663484173 + A[5] * -0.24428019483952224 + A[4] * 0.9806684309340956 + A[2] * 2.0060429734702763 + 2.1879813947825335;
A[14] = F[8](S[14]);
return [A[13],A[14]];
}var network = {activate};
/**
 * Joueur / Vaisseau
 * Basé sur un réseau de neurones
 */

function Player (genome) {

	this.radius = 400;

	// Position
	this.x = board.checkpoints[0].x;
	this.y = board.checkpoints[0].y;

	// Vitesse
	this.vx     = 0;
	this.vy     = 0;

	// Angle de départ
	this.angle = Math.angle(this, board.checkpoints[1]);

	// Génome du réseau de neurone
	this.genome = genome;
	this.genome.score = 0;

	this.checkpoint = 0; // Checkpoints passés
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
		var distance = Math.min( distance , 4000) / 4000;
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




