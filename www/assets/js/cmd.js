/**
 * Execution du JS en ligne de commande
 * (Remplace le fichier main)
 */

var WWW = false;
var NODEJS = true;

var DEBUG = false;

function lg (value) {
	if (DEBUG) console.log(value);
};


var PLAYER_AMOUNT    = 250;
var ITERATIONS       = 100; // Nombre de tours de jeu évalués
var MUTATION_RATE    = 0.3;
var ELITISM          = Math.round(0.1 * PLAYER_AMOUNT); // 10%
var START_HIDDEN     = 0;
var GENERATIONS      = 1000;

// Neataptic framework
var neataptic = require('neataptic');

var Neat      = neataptic.Neat;
var methods   = neataptic.methods;
var Config    = neataptic.config;
var Architect = neataptic.architect;

Config.warnings = false;


// Entrainement

var training = new Training();

for (i = 0; i < ITERATIONS * GENERATIONS; i++) {
	training.update();
}
training.neat.sort();


// Enregistrement de la population en JSON

var json = training.export();

fs = require('fs');
fs.writeFile('www/export/population.json', json, function (err) {
  if (err) return console.log(err);
  console.log('Export JSON du résultat');
});


// Enregistrement de la population en JS

var js = "var population = " + json + ';';

fs = require('fs');
fs.writeFile('www/export/population.js', js, function (err) {
  if (err) return console.log(err);
  console.log('Export JSON du résultat');
});




// Enregistrement du meilleur network


best = training.neat.population[0];

var f = best.standalone();

fs = require('fs');
fs.writeFile('www/export/network.js', f, function (err) {
  if (err) return console.log(err);
  console.log('Export JS du résultat');
});

