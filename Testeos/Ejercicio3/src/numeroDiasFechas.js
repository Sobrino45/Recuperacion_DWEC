function validarFecha(fecha) {
    const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    const match = fecha.match(regex);
    if (!match) return false;

    const [, dia, mes, anio] = match.map(Number);
    const date = new Date(anio, mes - 1, dia);

    return date.getFullYear() === anio && 
           date.getMonth() === mes - 1 && 
           date.getDate() === dia;
}

function numeroDiasFechas(fechaDesde, fechaHasta) {
    if (!validarFecha(fechaDesde) || !validarFecha(fechaHasta)) {
        throw new Error("Alguna(s) de las fechas de entrada es incorrecta");
    }

    const [diaDesde, mesDesde, anioDesde] = fechaDesde.split("/").map(Number);
    const [diaHasta, mesHasta, anioHasta] = fechaHasta.split("/").map(Number);

    const dateDesde = new Date(anioDesde, mesDesde - 1, diaDesde);
    const dateHasta = new Date(anioHasta, mesHasta - 1, diaHasta);

    const diferenciaMs = dateHasta - dateDesde;
    return Math.round(diferenciaMs / (1000 * 60 * 60 * 24));
}
