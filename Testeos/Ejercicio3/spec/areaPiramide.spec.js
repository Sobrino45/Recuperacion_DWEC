describe("Función areaPiramide", function() {
    const casosDePrueba = [
        { lado: 6.8, altura: 9, esperado: 177.083 },
        { lado: 7.1, altura: 9.4, esperado: 193.092 },
        { lado: 7.4, altura: 9.8, esperado: 209.793 }
    ];

    casosDePrueba.forEach(({ lado, altura, esperado }) => {
        it(`debería calcular correctamente el área para lado=${lado} y altura=${altura}`, function() {
            expect(areaPiramide(lado, altura)).toBeCloseTo(esperado, 3);
        });
    });

    it("debería devolver un número", function() {
        expect(typeof areaPiramide(6.8, 9)).toBe("number");
    });

    it("debería lanzar un error si el lado es negativo", function() {
        expect(() => areaPiramide(-6.8, 9)).toThrowError("Los parámetros de entrada deben tener valores positivos");
    });

    it("debería lanzar un error si la altura es negativa", function() {
        expect(() => areaPiramide(6.8, -9)).toThrowError("Los parámetros de entrada deben tener valores positivos");
    });

    it("debería lanzar un error si ambos valores son negativos", function() {
        expect(() => areaPiramide(-6.8, -9)).toThrowError("Los parámetros de entrada deben tener valores positivos");
    });
});
