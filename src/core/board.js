/**
 * Board game
 */

function Board (width, height) {
    this.width = width;
    this.height = height;
	this.checkpoints = [];
}

Board.prototype = {

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

		this.checkpoints = [];
		//this.checkpoints.push (new Checkpoint(0, 12013, 5520));
		//this.checkpoints.push (new Checkpoint(1, 10510, 6990));
		//this.checkpoints.push (new Checkpoint(1, 3980, 1472));
		//this.checkpoints.push (new Checkpoint(2, 3980, 1472));


		// Entre 3 et 6 checkpoints
		var n = 3 + Math.floor ( Math.random () * 3 );

		for (var i = 0; i < n ; i++) {
			var x = Math.round( Math.random() * (this.width - 1600)) + 800;
			var y = Math.round( Math.random() * (this.height - 1600)) + 800;
			this.checkpoints.push (new Checkpoint(i, x, y));
		}

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
