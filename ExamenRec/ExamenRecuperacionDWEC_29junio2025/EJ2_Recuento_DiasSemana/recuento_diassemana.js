// Escribe aquí tu código
function recuentoDiasSemana(fecha) {
    const [mes, anio] = this.fecha.split("/");

    let mesDecidido = new Date(anio, mes-1);
    let finalMes = new Date(anio, mes);

    while (mesDecidido != finalMes) {
        let day = mesDecidido.getDay();
        if (day === 0) {
            domingo += 1;
        } else if (day === 1) {
            lunes += 1;
        } else if (day === 2) {
            martes += 1;
        } else if (day === 3) {
            miercoles += 1;
        } else if (day === 4) {
            jueves += 1;
        } else if (day === 5) {
            viernes += 1;
        } else if (day === 6) {
            sabado += 1;
        }
    }
    return "lunes:" + lunes + ", martes:" + martes + ", miercoles:" + miercoles + ", jueves:" + jueves + ", viernes:" + viernes + ", sábados:" + sabado + ", domingos:" + domingo;

    
}

