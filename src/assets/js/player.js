/**
 * Joueur / Vaisseau
 * Basé sur un réseau de neurones
 */

function Player (genome) {

	this.radius = 400;

	//this.x      = Math.round (Math.random() * 16000);
	//this.y      = Math.round (Math.random() * 8000);

	this.x = 4000;
	this.y = 6000;

	this.vx     = 0;
	this.vy     = 0;
	this.angle  = Math.radians(-90);

	this.genome = genome;
	this.genome.score = 0;
	this.checkpoint = 0;
	this.turn = 0; // Tour de jeu

}

Player.prototype = {

	/**
	 * Simulation d'un tour de jeu
	 */
	simulate: function () {

		// Nouveau tour de jeu
		this.turn++;

		// Cible : prochain checkpoint
		var target = board.getCheckpoint(this.checkpoint + 1);

		// Résultat du réseau de neurones

		// Paramètres normalisés
		var speed = Math.min(500, Math.sqrt ( Math.pow(this.vx, 2) + Math.pow(this.vy, 2))) / 500 ;
		var distance = Math.min( Math.distance(this, target), 3000) / 3000;
		var angle = Math.angle(this, target) / (Math.PI * 2);
		//console.log([speed, distance, angle]);

		// Résultat du réseau de neurones (normalisé)
		var input = [speed, distance, angle];
		var output = this.genome.activate(input);
		//console.log(output);


		// On normalise les valeurs récupérées
		var angle = ( output [0]
					  * Math.PI * 2 // En radians
					  - Math.PI  ) // Droite ou gauche
					  * .1; // 36 / 360 : + ou - 18 degrés

		var thrust = Math.round (
						Math.ease(output [1], 3) // Préférence à la full accelération
						* 200 // Accélération max 200
					);

		//lg(Math.round(Math.degrees(angle)));

		// Déplacement du vaisseau
		this.move(angle, thrust);

		// Checkpoint atteint ? Nouvelle cible
		if ( Math.distance (this, target) < 590 ) {
			this.checkpoint ++;
		}

		// Mise à jour du score dans le genome
		var score = ( this.genome.score * (this.turn - 1) // Tour précédent
					  + this.score()) / this.turn;

		this.genome.score = this.score();
		if (this.genome.score > bestScore) bestScore = this.genome.score;

	},

	/**
	 * Déplacement du vaisseau
	 */
	move: function (angle, thrust) {

		// On ajoute l'angle de rotation
		angle += this.angle

		// Calcul des vecteurs de vitesse
		this.vx += Math.round(thrust * Math.cos( angle ));
		this.vy += Math.round(thrust * Math.sin( angle ));

		// Déplacement du vaisseau
		this.x += this.vx;
		this.y += this.vy;

		// On met à jour l'angle du vaisseau
		this.angle = Math.angle({x: 0, y: 0}, {x:this.vx, y:this.vy});

		// Frottements en fin de tour (.85)
		this.vx *= .85;
		this.vy *= .85;

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
		b = Math.min(b, 2); // Au delà de deux fois la distance, score = 0;
		b = (2 - b) / 2; // On normalise

		return a + b;
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

