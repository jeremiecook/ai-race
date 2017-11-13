/**
 * Execution du JS en ligne de commande
 * (Remplace le fichier main)
 */

var WWW = false;
var NODEJS = true;

var PLAYER_AMOUNT    = 250;
var ITERATIONS       = 200; // Nombre de tours de jeu évalués
var MUTATION_RATE    = 0.3;
var ELITISM          = Math.round(0.1 * PLAYER_AMOUNT); // 10%
var START_HIDDEN     = 0;

// Neataptic framework
var neataptic = require('neataptic');

var Neat      = neataptic.Neat;
var methods   = neataptic.methods;
var Config    = neataptic.config;
var Architect = neataptic.architect;

Config.warnings = false;

var training = new Training();

for (i = 0; i <= ITERATIONS * 1000; i++) {
	training.update();
}

var json = training.export();

//training.save();
fs = require('fs');

fs.writeFile('www/json/population.json', json, function (err) {
  if (err) return console.log(err);
  console.log('Export JSON du résultat');
});
