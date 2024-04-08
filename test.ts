import { test } from 'vitest';
import { sumaPuntuacion } from './motor';
import { juego } from './modelo';
import { mostrarMensajePorPuntuacion } from './ui';

test('Suma de puntuación: juego gana al llegar a 7.5', () => {
    juego.score = 7.5;
    sumaPuntuacion(1);
    return juego.gameOver === true;
});

test('Mensaje de juego ganado al llegar a 7.5', () => {
    juego.score = 7.5;
    mostrarMensajePorPuntuacion(juego.score);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(document.body.innerText.includes('¡Lo has clavado! ¡Enhorabuena!'));
        }, 100);
    });
});

test('Suma de puntuación: juego pierde al pasar de 7.5', () => {
    juego.score = 7.4;
    sumaPuntuacion(1);
    return juego.gameOver === true;
});

test('Mensaje de juego perdido al pasar de 7.5', () => {
    juego.score = 7.4;
    mostrarMensajePorPuntuacion(juego.score);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(document.body.innerText.includes('Te has pasado, has perdido'));
        }, 100);
    });
});

test('Suma de puntuación: juego continúa si la puntuación es menor a 7.5', () => {
    juego.score = 7.4;
    sumaPuntuacion(1);
    return juego.gameOver === false;
});

test('Mensaje de juego continúa si la puntuación es menor a 7.5', () => {
    juego.score = 7.4;
    mostrarMensajePorPuntuacion(juego.score);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(document.body.innerText.includes('Casi casi...'));
        }, 100);
    });
});
