export const juego = {
    score: 0,
    gameOver: false
};

export function muestraPuntuacion(): void {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Puntuación: ${juego.score}`;
    }
}