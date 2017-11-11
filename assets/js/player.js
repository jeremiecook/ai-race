/**
 * Joueurs / Vaisseau
 */

function Player (genome) {

	this.radius = 150;

	this.x      = 100;
	this.y      = 100;
	this.vx     = 0;
	this.vy     = 0;
	this.angle  = 0

	this.genome = genome;
	this.genome.score = 0;

	this.checkpoint = 0;

}

Player.prototype = {

	/**
	 * Simulation d'un tour de jeu
	 */
	simulate: function () {

		// Résultat du réseau de neurones
		var target = board.getCheckpoint(this.checkpoint + 1);

		var distance = Math.distance(this, target);
		var angle = Math.angle(this, target);

		var input = [this.vx, this.vy, distance, angle];
		var output = this.genome.activate(input);

		console.log(output);

		// On normalise les valeurs récupérées
		var angle  = Math.round ( output [0] * 90 - 45 );
		var thrust = Math.round ( Math.ease(output [1]) * 100 );

		// Calcul de la vitesse
		this.vx += Math.round(thrust * Math.cos( Math.radians (angle) ));
		this.vy += Math.round(thrust * Math.sin( Math.radians (angle) ));


		// Déplacement du vaisseau
		this.x += this.vx;
		this.y += this.vy;

		console.log("Angle " + angle);
		console.log("Vitesse " + thrust);
		console.log("VX " + this.x);
		console.log("VY " + this.y);

		// Checkpoint atteint
		if ( Math.distance (this, target) < 590 ) {
			this.checkpoint ++;
		}

		this.display();

	},

	/**
	 * Calcul du score du joueur
	 */
	score: function () {

		checkpoint = board.getCheckpoint(this.checkpoint);
		target = board.getCheckpoint(this.checkpoint + 1);

		a = 5 * this.checkpoint;
		b = 1 - Math.distance(this, target) / Math.distance(checkpoint, target);

		return a + b;
	},

	/**
	 * Affiche le board à l'écran
	 */
	display: function () {

		// Si le checkpoint n'existe pas, on le crée
		if ( ! this.html ) {

			this.html = $(
				'<div/>',
				{
					class: 'player',
				}
			);

			$BOARD.append(this.html);
		}

		// On positionne le checkpoint sur la carte
		this.html.css ({
			left: Math.round(this.x * TO_PIXEL),
			top:  Math.round(this.y * TO_PIXEL),
			transform: 'rotate(' + this.angle + 'deg)',
		});

	},

}

