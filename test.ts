import { mostrarMensajePorPuntuacion } from './motor';
import { juego } from './modelo';
import { describe, it, expect } from 'vitest';

describe('Pruebas de determinación de ganador', () => {
    it('Debería indicar que el jugador ha ganado si la puntuación es igual a 7.5', () => {
        juego.score = 7.5;
        mostrarMensajePorPuntuacion();
        expect(juego.gameOver).toBe(true);
    });

    it('Debería indicar que el jugador ha ganado si la puntuación es mayor que 7.5', () => {
        juego.score = 8;
        mostrarMensajePorPuntuacion();
        expect(juego.gameOver).toBe(true);
    });

    it('Debería indicar que el jugador no ha ganado si la puntuación es menor que 7.5', () => {
        juego.score = 5;
        mostrarMensajePorPuntuacion();
        expect(juego.gameOver).toBe(false);
    });

    it('Debería indicar que el jugador no ha ganado si la puntuación es igual a 4', () => {
        juego.score = 4;
        mostrarMensajePorPuntuacion();
        expect(juego.gameOver).toBe(false);
    });
});
