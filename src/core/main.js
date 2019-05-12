/**
 *
 */

var DEBUG = false;


// Paramètres génétiques
var PLAYER_AMOUNT    = 100;
var ITERATIONS       = 100; // Nombre de tours de jeu évalués
var MUTATION_RATE    = 0.3;
var ELITISM          = Math.round(0.1 * PLAYER_AMOUNT); // 10%
var START_HIDDEN     = 10;
var USE_POPULATION   = false;


// Elements de jeu

var board = new Board(16000, 8000);
    board.addCheckPoint(new Checkpoint(0, 12013, 5520));
    board.addCheckPoint(new Checkpoint(0, 10510, 6990));
    board.addCheckPoint(new Checkpoint(0, 3980, 1472));
    board.addCheckPoint(new Checkpoint(0, 5980, 7472));
    //board.randomCheckpoints();

var training = new Training();






