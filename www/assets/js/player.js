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

