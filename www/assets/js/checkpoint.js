/**
 * Checkpoint
 */

var CHECKPOINT_RADIUS = 600;

function Checkpoint (id, x, y) {

	this.id = id;
	this.x = x;
	this.y = y;

}

Checkpoint.prototype = {

	display: function () {

		// Si le checkpoint n'existe pas, on le crée
		if ( ! this.html ) {

			this.html = $(
				'<div/>',
				{
					class: 'checkpoint',
					text: this.id,
				}
			);

			$BOARD.append(this.html);
		}

		// On positionne le checkpoint sur la carte
		this.html.css ({
			width:  CHECKPOINT_RADIUS * 2 * TO_PIXEL,
			height: CHECKPOINT_RADIUS * 2 * TO_PIXEL,
			left: this.x * TO_PIXEL,
			top:  this.y * TO_PIXEL,
		});

	},

}

