class Reserva {
    constructor(nombreCliente, dni, fechaEntrada, fechaSalida) {
        this.nombreCliente = nombreCliente;
        this.dni = dni;
        this.fechaEntrada = this.validarFecha(fechaEntrada);
        this.fechaSalida = this.validarFecha(fechaSalida);

        const numeroDias = this.numeroDiasEstancia;
        if (numeroDias < 1) {
            throw new Error("Estancia mínima debe ser de un día");
        }
    }

    validarFecha(fecha) {
        const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        const match = fecha.match(regex);
        if (!match) {
            throw new Error("Fecha no válida");
        }

        const [, dia, mes, anio] = match.map(Number);
        const date = new Date(anio, mes - 1, dia);

        if (date.getFullYear() !== anio || date.getMonth() !== mes - 1 || date.getDate() !== dia) {
            throw new Error("Fecha no válida");
        }

        return fecha;
    }

    get codigoCliente() {
        const [apellido1] = this.nombreCliente.split(";"); 
        const nombrePila = this.nombreCliente.split(";")[2]?.trim()[0] || ""; 
        const tresUltimosDNI = this.dni.slice(0, -1).slice(-3); 
        return (nombrePila + apellido1 + tresUltimosDNI).toUpperCase();
    }

    get numeroDiasEstancia() {
        const [diaDesde, mesDesde, anioDesde] = this.fechaEntrada.split("/").map(Number);
        const [diaHasta, mesHasta, anioHasta] = this.fechaSalida.split("/").map(Number);

        const dateDesde = new Date(anioDesde, mesDesde - 1, diaDesde);
        const dateHasta = new Date(anioHasta, mesHasta - 1, diaHasta);

        const diffTime = dateHasta - dateDesde;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        return diffDays;
    }

    modificarFechas(nuevaEntrada, nuevaSalida) {
        nuevaEntrada = this.validarFecha(nuevaEntrada);
        nuevaSalida = this.validarFecha(nuevaSalida);

        const [diaDesde, mesDesde, anioDesde] = nuevaEntrada.split("/").map(Number);
        const [diaHasta, mesHasta, anioHasta] = nuevaSalida.split("/").map(Number);

        const dateDesde = new Date(anioDesde, mesDesde - 1, diaDesde);
        const dateHasta = new Date(anioHasta, mesHasta - 1, diaHasta);

        if (dateHasta <= dateDesde) {
            throw new Error("Fecha de salida debe ser posterior a la de entrada");
        }

        if (Math.round((dateHasta - dateDesde) / (1000 * 60 * 60 * 24)) < 1) {
            throw new Error("Estancia mínima debe ser de un día");
        }

        this.fechaEntrada = nuevaEntrada;
        this.fechaSalida = nuevaSalida;
    }

    costeEstancia() {
        const [diaDesde, mesDesde, anioDesde] = this.fechaEntrada.split("/").map(Number);
        const [diaHasta, mesHasta, anioHasta] = this.fechaSalida.split("/").map(Number);

        let dateDesde = new Date(anioDesde, mesDesde - 1, diaDesde);
        let dateHasta = new Date(anioHasta, mesHasta - 1, diaHasta);

        let totalCoste = 0;

        while (dateDesde < dateHasta) {
            let day = dateDesde.getDay();
            if (day === 0) {
                totalCoste += 43; // Domingo
            } else if (day === 6) {
                totalCoste += 36; // Sábado
            } else {
                totalCoste += 24; // Lunes a viernes
            }

            dateDesde.setDate(dateDesde.getDate() + 1);
        }

        return totalCoste;
    }
}


