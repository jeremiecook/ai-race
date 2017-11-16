/**
 * Initialisation
 * (Environnement Web)
 */

var WWW = true;
var DEBUG = false;

/**
 * Fonction de débug (pour le web)
 */
function lg (value) {
	if (DEBUG) console.log(value);
};

// Paramètres génétiques
var PLAYER_AMOUNT    = 1;
var ITERATIONS       = 200; // Nombre de tours de jeu évalués
var MUTATION_RATE    = 0.3;
var ELITISM          = Math.round(0.1 * PLAYER_AMOUNT); // 10%
var START_HIDDEN     = 10;
var USE_POPULATION   = true;


var $BOARD   = $('#game');
var TO_PIXEL = 800 / 16000;

var training = new Training();

// P5 Rendering
function setup() {

	board.display();

	$('a.run').on('click', function () {
		$('a.run').toggleClass('start');
		$('a.run').html( $('a.run').hasClass('start') ? 'Stop' : 'Start' );
	});

	$('a.next').on('click', function () {
		training.update();
	});

}

function draw() {

	if ($('a.run').hasClass('start')) {
		training.update();
	}
}

