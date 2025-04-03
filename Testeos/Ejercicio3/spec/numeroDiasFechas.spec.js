describe("Función numeroDiasFechas", function() {
    let casosDePrueba = [
        { desde: "9/11/2021", hasta: "9/11/2021", esperado: 0 },
        { desde: "28/02/2020", hasta: "1/3/2020", esperado: 2 },
        { desde: "28/02/2021", hasta: "1/3/2021", esperado: 1 },
        { desde: "17/04/1973", hasta: "14/11/1979", esperado: 2402 }
    ];

    casosDePrueba.forEach(({ desde, hasta, esperado }) => {
        it(`debería devolver ${esperado} días entre "${desde}" y "${hasta}"`, function() {
            expect(numeroDiasFechas(desde, hasta)).toBe(esperado);
        });
    });

    it("debería devolver un número", function() {
        expect(typeof numeroDiasFechas("9/11/2021", "10/11/2021")).toBe("number");
    });

    it("debería lanzar un error si la fecha es incorrecta", function() {
        expect(() => numeroDiasFechas("32/10/2024", "10/11/2024"))
            .toThrowError("Alguna(s) de las fechas de entrada es incorrecta");
    });

    it("debería lanzar un error si ambas fechas son incorrectas", function() {
        expect(() => numeroDiasFechas("32/13/2024", "31/02/2024"))
            .toThrowError("Alguna(s) de las fechas de entrada es incorrecta");
    });
});
