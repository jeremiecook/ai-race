/**
 * Fonction de débug
 */

// Log dans Codingame
// function lg (value) {

// 	if (! DEBUG) return;

// 	if (WWW && console) {
// 		console.log(value);
// 	} else {
// 		printErr(value);
// 	}
// };

// Log dans le navigateur
// if (console) {
// 	var lg = console.log.bind(console);
// }

/**
 * Fonctions mathématiques
 */

/**
 * Distance entre deux entités
 */
Math.distance = function (a, b) {
	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

/**
 * Fonction de distribution
 * Augement les probabilités des extrêmes (0 et 1)
 */
Math.ease = function (x, e) {

	// Par défaut, au carré
	if (typeof(e)==='undefined') e = 2;

	return Math.pow(x,e) / ( Math.pow(x,e) + Math.pow(1 - x, e) );
};

/**
 * Calcul d'un angle entre deux vecteurs
 */
Math.angle = function (a, b) {

    ad = b.x - a.x;
    op = b.y - a.y;
    return Math.atan2( (op) , (ad) );

  	// d = Math.distance(a, b);
  	// dx = (b.x - a.x) / d;
  	// dy = (b.y - a.y) / d;

  	// a = Math.acos(dx);
  	// a = dy < 0 ? 2 * Math.PI - a : a;
  	// return a;

};

/**
 * Conversion d'un angle en radians
 */
Math.radians = function ( degrees ) {
	return degrees * Math.PI / 180;
};

/**
 * Conversion d'un angle en degrés
 */
Math.degrees = function ( radians ) {
	return radians * 180 / Math.PI;
};
