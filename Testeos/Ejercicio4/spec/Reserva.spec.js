describe("Clase Reserva", function() {
    let reserva;

    beforeEach(function() {
        reserva = new Reserva("García;Ortiz;Juan Antonio", "44958625A", "27/02/2020", "03/03/2020");
    });

    it("debería devolver el código de cliente correcto", function() {
        expect(reserva.codigoCliente).toBe("JGARCÍA625");
    });

    it("debería devolver el número de días de estancia correcto", function() {
        expect(reserva.numeroDiasEstancia).toBe(5);
    });

    it("debería calcular el coste correcto de la estancia", function() {
        expect(reserva.costeEstancia()).toBe(151);
    });

    it("no debería modificar las fechas originales al calcular el coste", function() {
        const entradaOriginal = reserva.fechaEntrada;
        const salidaOriginal = reserva.fechaSalida;
        reserva.costeEstancia();
        expect(reserva.fechaEntrada).toBe(entradaOriginal);
        expect(reserva.fechaSalida).toBe(salidaOriginal);
    });

    it("debería modificar correctamente las fechas de la estancia", function() {
        reserva.modificarFechas("28/02/2020", "01/03/2020");
        expect(reserva.numeroDiasEstancia).toBe(2);
    });

    it("debería lanzar un error si la fecha de salida es anterior a la de entrada", function() {
        expect(() => reserva.modificarFechas("3/3/2020", "2/3/2020"))
            .toThrowError("Fecha de salida debe ser posterior a la de entrada");
    });

    it("debería lanzar un error si la estancia es menor a un día", function() {
        expect(() => reserva.modificarFechas("3/3/2020", "3/3/2020"))
            .toThrowError("Estancia mínima debe ser de un día");
    });
});
