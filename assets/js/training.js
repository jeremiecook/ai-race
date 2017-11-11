/**
 * Training
 */


// GA Settings
var PLAYER_AMOUNT    = 1;
var ITERATIONS       = 5; // Nombre de tours de jeu évalués
var MUTATION_RATE    = 0.3;
var ELITISM          = Math.round(0.1 * PLAYER_AMOUNT); // 10%

// Rendu HTML
var $BOARD   = $('#game');
var TO_PIXEL = 800 / 16000;

// Variables
var Neat      = neataptic.Neat;
var Methods   = neataptic.Methods;
var Config    = neataptic.Config;
var Architect = neataptic.Architect;

// Elements de jeu
var board = new Board();

function Training () {

	board.randomCheckpoints();
	board.display();
	this.initialize();

}

Training.prototype = {

	/**
	 * Initialisation du réseau de neurones
	 */
	initialize: function () {

		this.neat = new Neat(
			4, // Vitesse x, vitesse y, Input distance, angle
			2, // Angle, Vitesse
			null,
			{
			  mutation: [
			    Methods.Mutation.ADD_NODE,
			    Methods.Mutation.SUB_NODE,
			    Methods.Mutation.ADD_CONN,
			    Methods.Mutation.SUB_CONN,
			    Methods.Mutation.MOD_WEIGHT,
			    Methods.Mutation.MOD_BIAS,
			    Methods.Mutation.MOD_ACTIVATION,
			    Methods.Mutation.ADD_GATE,
			    Methods.Mutation.SUB_GATE,
			    Methods.Mutation.ADD_SELF_CONN,
			    Methods.Mutation.SUB_SELF_CONN,
			    Methods.Mutation.ADD_BACK_CONN,
			    Methods.Mutation.SUB_BACK_CONN
			  ],
			  popsize: PLAYER_AMOUNT,
			  mutationRate: MUTATION_RATE,
			  elitism: ELITISM
			}
		);

		//Initialisation des joueurs
		for (var player in this.neat.population) {
		 	genome = this.neat.population[player];
		 	this.neat.population[player] = new Architect.Random(4, 10, 2);
		}

	},


	/**
	 * Chaque génération
	 */
	update: function () {

		board.display();

		for(var individual in this.neat.population) {

			genome = this.neat.population[individual];
		    var player = new Player(genome);

			// Prévision sur n tours de jeu
			for(var i = 0; i < ITERATIONS; i ++)
			{
		    	// Some players are eaten during the iteration
		    	player.simulate();
			}
		}

	},

}

window.onload = function() {

	var training = new Training();

	//while(true) {
	training.update();
	//}

}



