function areaPiramide(lado, altura) {
    if (lado <= 0 || altura <= 0) {
        throw new Error("Los parámetros de entrada deben tener valores positivos");
    }
    
    const alturaCara = Math.sqrt(Math.pow(altura, 2) + Math.pow(lado / 2, 2));
    const areaBase = Math.pow(lado, 2);
    const areaLateral = 2 * lado * alturaCara;

    const areaTotal = areaBase + areaLateral;

    return Number(areaTotal.toFixed(5)); 
}

// Compatibilidad con Node.js y navegador
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = areaPiramide;
} else {
    window.areaPiramide = areaPiramide;
}
