/**
 * Initialisation
 * (Environnement Web)
 */

var DEBUG = false;


// Paramètres génétiques
var PLAYER_AMOUNT    = 100;
var ITERATIONS       = 100; // Nombre de tours de jeu évalués
var MUTATION_RATE    = 0.3;
var ELITISM          = Math.round(0.1 * PLAYER_AMOUNT); // 10%
var START_HIDDEN     = 10;
var USE_POPULATION   = false;


var $BOARD   = $('#game');
var TO_PIXEL = 800 / 16000;

// Elements de jeu

var board = new Board(16000, 8000);
    board.randomCheckpoints();

var training = new Training();



// P5 Rendering
// function setup() {

// 	$('a.run').on('click', function () {
// 		$('a.run').toggleClass('start');
// 		$('a.run').html( $('a.run').hasClass('start') ? 'Stop' : 'Start' );
// 	});

// 	$('a.next').on('click', function () {
// 		training.update();
//         render();
// 	});

// }

// function draw() {

// 	if ($('a.run').hasClass('start')) {
// 		training.update();
//         render();

//     }
// }


/**
 * Rendu graphique (HTML)
 */

// function render () {

//         width= 1200;
//         height= 800;


//         board.display();

//             if (WWW) {
//                 this.players[id].display();
//             }
//         if (WWW) {
//             board.display();
//         }

//         if (WWW) {
//             $("#game .checkpoint").remove();
//             $("#game .ship").remove();
//         }


//             // Affichage d'un compte rendu
//             if (WWW) {
//                 $('#info-population').html (this.neat.popsize);
//                 $('#info-iterations').html (this.iteration);
//                 $('#info-generation').html (generation);
//                 $('#info-average').html(average);
//                 $('#info-best').html(best);
//             } else {
//                 console.log('** Génération ' + generation + ' - Meilleur score : ' + best + ' (Moyenne : ' + average + ')');
//             }

// }


