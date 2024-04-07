"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separarFraseAutor = void 0;
function separarFraseAutor(fraseCompleta) {
    // Expresión regular para buscar la secuencia ". Nombre Autor." al final de la frase
    const regex = /(.+)(\. .+\.)/;
    const matches = fraseCompleta.match(regex);
    if (matches && matches.length === 3) {
        const frase = matches[1].trim();
        const autor = matches[2].trim();
        return [frase, autor];
    }
    else {
        // Si no se encuentra la secuencia, devuelve la frase completa y un autor vacío
        return [fraseCompleta.trim(), ""];
    }
}
exports.separarFraseAutor = separarFraseAutor;
