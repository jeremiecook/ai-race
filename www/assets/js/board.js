/**
 * Board game
 */


var BOARD_WIDTH  = 16000;
var BOARD_HEIGHT = 9000;


function Board () {
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
		this.checkpoints.push (new Checkpoint(0, 4000, 6000));
		this.checkpoints.push (new Checkpoint(1, 9000, 2000));
		this.checkpoints.push (new Checkpoint(2, 13000, 7000));


		// Entre 3 et 5 checkpoints
		// var n = Math.round ( Math.random () * 1 ) + 3;

		// for (var i = 0; i < n ; i++) {
		// 	var x = Math.round( Math.random() * (BOARD_WIDTH - 1600)) + 800;
		// 	var y = Math.round( Math.random() * (BOARD_HEIGHT - 1600)) + 800;
		// 	this.checkpoints.push (new Checkpoint(i, x, y));
		// }

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
