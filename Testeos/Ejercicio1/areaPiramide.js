function areaPiramide(lado, altura) {
    if (lado <= 0 || altura <= 0) {
        throw new Error("Los parámetros de entrada deben tener valores positivos");
    }
    
    const area = lado * (lado + 4 * Math.sqrt(Math.pow(altura, 2) + Math.pow(lado / 2, 2)));
    return parseFloat(area.toFixed(5));
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = areaPiramide;
}