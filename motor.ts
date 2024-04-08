import { juego } from './modelo';
import { muestraPuntuacion, nuevaPartida, mostrarMensajePorPuntuacion } from './ui';

export function dameCarta(): number {
    let carta: number = Math.floor(Math.random() * 10) + 1;
    if (carta > 7) {
        carta += 2;
    }
    return carta;
}

export function sumaPuntuacion(carta: number): void {
    if (carta >= 10) {
        juego.score += 0.5;
    } else {
        juego.score += carta;
    }
    
    muestraPuntuacion();

    if (juego.score === 7.5) {
        mostrarMensajePorPuntuacion(juego.score);
        nuevaPartida();
    } else if (juego.score > 7.5) {
        mostrarMensajePorPuntuacion(juego.score);
        nuevaPartida();
    }
}