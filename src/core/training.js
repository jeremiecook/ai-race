/**
 * Training
 */

var DEBUG = false;

// Default GA Settings
var PLAYER_AMOUNT    = 100;
var ITERATIONS       = 200; // Nombre de tours de jeu évalués
var MUTATION_RATE    = 0.3;
var ELITISM          = Math.round(0.1 * PLAYER_AMOUNT); // 10%
var START_HIDDEN     = 8; // Nombre de layers
var USE_POPULATION   = false;


// Neataptic framework
if (typeof(require) !== 'undefined') var neataptic = require('neataptic');
var Neat      = neataptic.Neat;
var Architect = neataptic.architect;
var methods   = neataptic.methods;

// On masque les warning de Neataptic
neataptic.config.warnings = false;

//var bestScore = 0;

/**
 * Initialisation du réseau de neurones
 */
function Training () {

	// Tableau de joueurs
	this.players = [];
	this.iteration = 0;

	this.neat = new Neat(
		3, // Entrée : Angle vers la cible, vitesse, distance de la cible
		2, // Sortie : Angle, Vitesse
		null,
		{
		  mutation: [
		    methods.mutation.ADD_NODE,
	        methods.mutation.SUB_NODE,
	        methods.mutation.ADD_CONN,
	        methods.mutation.SUB_CONN,
	        methods.mutation.MOD_WEIGHT,
	        methods.mutation.MOD_BIAS,
            // methods.mutation.MOD_ACTIVATION,
        	// methods.mutation.ADD_GATE,
        	// methods.mutation.SUB_GATE,
        	// methods.mutation.ADD_SELF_CONN,
        	// methods.mutation.SUB_SELF_CONN,
        	// methods.mutation.ADD_BACK_CONN,
			// methods.mutation.SUB_BACK_CONN
		  ],
		  popsize: PLAYER_AMOUNT,
		  mutationRate: MUTATION_RATE,
		  elitism: ELITISM,
		  network: new Architect.Random(3,START_HIDDEN,2),
		}
	);

	// Utilisation d'une population prédéfinie
	// if (WWW && USE_POPULATION && false) {
	// 	var newPop = [];
	// 	for(var i = 0; i < PLAYER_AMOUNT; i++){
	// 	  var json = population[i % population.length];
	// 	  newPop[i] = neataptic.Network.fromJSON(json);
	// 	}
	// 	population = newPop;
	// 	this.neat.population = population;
	// }

	// Création de la première génération
	var population = [];
	for(var i = 0; i < PLAYER_AMOUNT; i++){
	  population[i] = new Architect.Random(3,START_HIDDEN,2);
	}
	this.neat.population = population;
}


Training.prototype = {

	/**
	 * Création d'une nouvelle génération de joueurs
	 */
	generation: function () {

		//this.clear();
		this.neat.generation ++;

		for (var genome in this.neat.population) {
		 	genome = this.neat.population[genome];
		 	this.players.push( new Ship(genome) );
		}

	},

	/**
	 * Evolution d'une génération de networks
	 */
	evolve: function () {

		this.neat.sort();

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
	},

	/**
	 * Reset de l'affichage
	 * et des variables propres à une génération
	 */
	clear: function () {
		//board.randomCheckpoints();
	},

	/**
	 * Chaque génération
	 */
	update: function () {

		// Nouvelle génération de joueurs
		if (this.players.length == 0) {
			this.generation();
		}

		// Simulation d'un tour de jeu pour chaque joueur
		for(var id in this.players) {
			this.players[id].simulate();
		}

		// Fin de l'évaluation, on crée une nouvelle génération
		if (this.iteration == ITERATIONS) {

			this.neat.sort();

  			var generation = this.neat.generation;
  			var average    = Math.round(this.neat.getAverage() * 100 ) / 100;
  			var best       = Math.round(this.neat.getFittest().score * 100) / 100;
            // LOG

			this.evolve();
		}

		this.iteration ++;
	},

	export: function () {
		this.neat.sort();
		return JSON.stringify(this.neat.export(), null, "\t");
	}


}




