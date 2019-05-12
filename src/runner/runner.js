/**
 * Execution du JS en ligne de commande
 * (Remplace le fichier main)
 * (Node Js)
 * node node.js
 */

var WWW = false;
var DEBUG = false;

/**
 * Fonction de log
 */
function lg (value) {
	if (DEBUG) console.log(value);
};

/**
 * Ecriture dans un fichier
 */
fs = require('fs');
function write (file, value, message) {
	fs.writeFile(file, value, function (err) {
	  if (err) return console.log(err);
	  console.log('> ' + message);
	});
}


// Paramètres généraux de l'entrainement
var PLAYER_AMOUNT    = 500;
var ITERATIONS       = 50; // Nombre de tours de jeu évalués
var GENERATIONS      = 5000; // Nombre de génération pour le test

// Paramètre de sélection génétique
var MUTATION_RATE    = 0.3;
var ELITISM          = Math.round(0.1 * PLAYER_AMOUNT); // 10%
var START_HIDDEN     = 10;




// Entrainement

var training = new Training();

for (i = 0; i < ITERATIONS * GENERATIONS; i++) {
	training.update();
}


// On trie le résultat, les meilleurs en premier
training.neat.sort();

// Enregistrement de la population en JSON
var json = training.export();
write('www/export/population.json', json, 'Export JSON du résultat');

// Enregistrement de la population en variable JS
var js = "var population = " + json + ';';
write('www/export/population.js', js, 'Export JS du résultat');

// Enregistrement du meilleur network en JS standalone
best = training.neat.population[0];
var best = best.standalone();
best  += 'var network = {activate};';
write ('www/export/network.js', best, 'Export JS du meilleur network');

