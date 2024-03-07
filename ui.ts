import { juego, muestraPuntuacion } from './modelo';
import { nuevaPartida, dameCarta, mostrarCarta, sumaPuntuacion, mostrarMensajePorPuntuacion } from './motor';

document.addEventListener('DOMContentLoaded', function () {
    muestraPuntuacion();

    const hitButton = document.getElementById('hit');
    const standButton = document.getElementById('stand');
    const newGameButton = document.getElementById('new-game');

    if (hitButton && standButton && newGameButton) {
        hitButton.addEventListener('click', function () {
            if (!juego.gameOver) {
                const carta = dameCarta();
                mostrarCarta(carta);
                sumaPuntuacion(carta);
            }
        });

        standButton.addEventListener('click', function () {
            if (!juego.gameOver) {
                juego.gameOver = true;
                mostrarMensajePorPuntuacion();
            }
        });

        newGameButton.addEventListener('click', function () {
            nuevaPartida();
        });
    }
});
