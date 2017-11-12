/**
 * Training
 */

// GA Settings
var PLAYER_AMOUNT    = 150;
var ITERATIONS       = 100; // Nombre de tours de jeu évalués
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

var bestScore = 0;

/** Turn off warnings */
Config.warnings = false;


// Elements de jeu
var board = new Board();

function Training () {

	// Tableau de joueurs
	this.players = [];
	this.iteration = 0;

	this.initialize();

}

Training.prototype = {

	/**
	 * Initialisation du réseau de neurones
	 */
	initialize: function () {

		this.neat = new Neat(
			3, // Vitesse x, vitesse y, Input distance, angle
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

		// Initialisation de génomes aléatoires
		//for (var genome in this.neat.population) {
		// 	this.neat.population[genome] = new Architect.Random(3, 10, 2);
		//}

	},


	generation: function () {

		$("#game .checkpoint").remove();
		$("#game .player").remove();
		bestScore = 0;

		board.randomCheckpoints();
		board.display();

		this.neat.generation++;

		for (var genome in this.neat.population) {
		 	genome = this.neat.population[genome];
		 	this.players.push( new Player(genome) );
		}

	},

	/**
	 * Chaque génération
	 */
	update: function (silent = false) {

		// Nouvelle génération de joueurs
		if (this.players.length == 0) {
			this.generation();
		}

		// Simulation d'un tour de jeu pour chaque joueur
		for(var id in this.players) {
			this.players[id].simulate();

			if (! silent) this.players[id].display();

		}

		// Fin de l'évaluation, on crée une nouvelle génération
		if (this.iteration >= ITERATIONS) {

			if (! silent) {
  			$('#info-population').html (this.neat.popsize);
  			$('#info-iterations').html (this.iteration);
  			$('#info-generation').html (this.neat.generation);
  			$('#info-average').html( Math.round(this.neat.getAverage() * 100 ) / 100 );
  			$('#info-best').html( Math.round(this.neat.getFittest().score * 100) / 100 );
  			}


  			var newPopulation = [];

			for(var i = 0; i < this.neat.elitism; i++){
			    newPopulation.push(this.neat.population[i]);
			}

			for(var i = 0; i < this.neat.popsize - this.neat.elitism; i++){
    			newPopulation.push(this.neat.getOffspring());
  			}

  			this.neat.population = newPopulation;
  			this.neat.mutate();

			this.players = [];
			this.iteration = 0;



		}

		this.iteration ++;
		//console.log("Fin de tour !");
	},
}

var training = new Training();



// P5 Rendering
function setup() {
	//var canvas = createCanvas(800, 450);
	//canvas.parent('#game');
	//background(200);
	//
	$('a.run').on('click', function () {
		$('a.run').toggleClass('start');
		$('a.run').html( $('a.run').hasClass('start') ? 'Stop' : 'Start' );
	});

	$('a.next').on('click', function () {
		training.update();
	});

	$('a.g100').on('click', function () {

		// On exécute en silence 100 générations d'un coup
		for (i = 0; i < (ITERATIONS * 10) - 1; i++) {
			training.update(true);
		}

		// Une dernière pour mettre à jour les informations
		training.update();
	});

}

function draw() {

	if ($('a.run').hasClass('start')) {
		training.update();
	}
}



