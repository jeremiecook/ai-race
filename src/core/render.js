/**
 * Rendu graphique (HTML)
 */

var TO_PIXEL = 800 / 16000;


function HTML () {
    this.$board = $('#game');
    this.$checkpoints = [];
    this.$ships = [];
}

HTML.prototype = {

    board: function (board) {
        this.checkpoints(board.checkpoints);
    },

    checkpoints: function (checkpoints) {
        for (i = 0; i < checkpoints.length; i++) {

            // Si le checkpoint n'existe pas, on le crée
            if ( ! this.$checkpoints[i] ) {

                this.$checkpoints[i] = $(
                    '<div/>',
                    {
                        class: 'checkpoint',
                        text: this.id,
                    }
                );

                this.$board.append(this.html);
            }

            // On positionne le checkpoint sur la carte
            this.$checkpoints[i].css ({
                width:  CHECKPOINT_RADIUS * 2 * TO_PIXEL,
                height: CHECKPOINT_RADIUS * 2 * TO_PIXEL,
                left: this.x * TO_PIXEL,
                top:  this.y * TO_PIXEL,
            });
        }
    },

    ships: function (ships) {
        for (i = 0; i < ships.length; i++) {

            // Si le checkpoint n'existe pas, on le crée
            if ( ! this.$ships[i] ) {
                this.$ships[i] = $ ("<div class='ship'><span></span></div>");
                this.$board.append(this.html);
            }

            //var opacity = Math.round(this.genome.score / bestScore * 10) / 10;
            //lg(opacity);

            // On positionne le checkpoint sur la carte
            this.$ships[i].css ({
                width:  this.radius * 2 * TO_PIXEL,
                height: this.radius * 2 * TO_PIXEL,
                left: Math.round(this.x * TO_PIXEL),
                top:  Math.round(this.y * TO_PIXEL),
                opacity: opacity,
            });

            this.$ships[i].find("span").css ({
                transform: 'rotate(' + Math.degrees(this.angle) + 'deg)'
            });
        }
    },

}

// function render () {

//         width= 1200;
//         height= 800;


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
//



/**
 * P5 Rendering
 * (Pour un affichage image par image)
 */

function setup () {

    $('a.run').on('click', function () {
        $('a.run').toggleClass('start');
        $('a.run').html( $('a.run').hasClass('start') ? 'Stop' : 'Start' );
    });

    $('a.next').on('click', function () {
        training.update();
        render();
    });
}

function draw () {

    if ($('a.run').hasClass('start')) {
        training.update();
        render();
    }
}

