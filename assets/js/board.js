/**
 * Board game
 */

function Board () {

	this.width       = 16000;
	this.height      = 9000;
	this.checkpoints = [];
	this.players     = [];

	this.initialize();

}

Board.prototype = {

	/**
	 * Création du rendu graphique
	 */
	initialize: function () {
	},

	/**
	 * Renvoie un checkpoint
	 */
	getCheckpoint: function (x) {
		x = x % this.checkpoints.length; // Pour gérer les différents tours complets
		return this.checkpoints[x];
	},

	/**
	 * Création aléatoire de checkpoints
	 */
	randomCheckpoints: function () {
		this.checkpoints.push (new Checkpoint(0, 4000, 8000));
		this.checkpoints.push (new Checkpoint(1, 12000, 2000));
		this.checkpoints.push (new Checkpoint(2, 14000, 3000));
	},

	/**
	 * Affiche le board à l'écran
	 */
	display: function () {

		// Affichage des checkpoints
		for (i = 0; i < this.checkpoints.length; i++) {
			this.checkpoints[i].display();
		}
	},

};

/**
 * Checkpoint
 */

function Checkpoint (id, x, y) {

	this.id = id;
	this.radius = 600;
	this.x = x;
	this.y = y;

}

Checkpoint.prototype = {

	display: function () {

		// Si le checkpoint n'existe pas, on le crée
		if ( ! this.html ) {

			this.html = $(
				'<div/>',
				{
					class: 'checkpoint',
					text: this.id,
				}
			);

			$BOARD.append(this.html);
		}

		// On positionne le checkpoint sur la carte
		this.html.css ({
			left: this.x * TO_PIXEL,
			top:  this.y * TO_PIXEL,
		});

	},

}


/**
 * Distance entre deux entités
 */
Math.distance = function (a, b) {
	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

/**
 * Augmente les probabilités de O et 1
 */
Math.ease = function (x) {
	return Math.pow(x,3) / ( Math.pow(x,3) + Math.pow(1 - x, 3) );
}

Math.angle = function (a, b) {

    ad = b.x - a.x;
    op = b.y - a.y;

    return Math.round(Math.degrees (Math.atan2( (op) , (ad) )));
}

// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};


