/**
 * Initialisation
 * (Environnement Web)
 */

var WWW = true;
var NODEJS = false;

var $BOARD   = $('#game');
var TO_PIXEL = 800 / 16000;

var Neat      = neataptic.Neat;
var methods   = neataptic.methods;
var Config    = neataptic.config;
var Architect = neataptic.architect;


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

}

function draw() {

	if ($('a.run').hasClass('start')) {
		training.update();
	}
}

