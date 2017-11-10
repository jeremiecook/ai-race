'use strict';

class RoomState extends Phaser.Sprite {

	preload () {

    	// Images
    	this.load.image('player',     'assets/images/player.svg');
    	this.load.image('checkpoint', 'assets/images/checkpoint.svg');

	}


	create () {

		// Couleur de fond
		this.stage.backgroundColor = "#565DAA";

	 	// Création du joueur
		this.game.player = this.add.sprite(40, 40, 'player');

		// Création du checkpoint
		this.setRandomCheckpoint();

   		// Contrôles clavier
   		this.keyboard = this.input.keyboard.createCursorKeys();

	}

	update () {

		//this.game.player.rotation = Math.PI / 2 + this.physics.arcade.angleToPointer(this.game.player);

		// Déplacements du joueur

    	if (this.keyboard.up.isDown) {
    		this.game.player.y -= 5;
    	}

	  	else if (this.keyboard.down.isDown) {
	  		this.game.player.y += 5;
	  	}

   		if (this.keyboard.left.isDown) {
   			this.game.player.x -= 5;
    	}

    	else if (this.keyboard.right.isDown) {
    		this.game.player.x += 5;
    	}



	}


	setRandomCheckpoint () {

		this.game.checkpoint = this.add.sprite(100, 100, 'checkpoint');
	}

   render() {
      //this.game.debug.body(this.game.player);
	}


}
