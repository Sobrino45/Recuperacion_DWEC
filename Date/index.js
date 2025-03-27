// Fecha actual
let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getFullYear());
console.log(fechaActual.getMonth() + 1); // Enero es 0
console.log(fechaActual.getDate());
console.log(fechaActual.getDay());
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());

// Fecha de nacimiento
let fechaNacimiento = new Date(1995, 5, 15); // Mes en base 0 (Junio)
console.log(fechaNacimiento);

// Función para obtener nombre del mes
function obtenerNombreMes(numeroMes) {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[numeroMes];
}
console.log(obtenerNombreMes(fechaActual.getMonth()));

// Función para obtener nombre del día de la semana
function obtenerNombreDia(numeroDia) {
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[numeroDia];
}
console.log(obtenerNombreDia(fechaActual.getDay()));

// Milisegundos desde 1970
console.log(Date.now());

// Milisegundos hasta la fecha de nacimiento
let fechaNacimientoMs = new Date(1995, 5, 15).getTime();
console.log(fechaNacimientoMs);

// Diferencia horaria con UTC
console.log(fechaActual.getTimezoneOffset() / 60);

// Diferencia entre getUTCHours y getHours
console.log(fechaActual.getUTCHours() - fechaActual.getHours());

// Día siguiente a 28/2/2021 y 28/2/2020
let fecha2021 = new Date(2021, 1, 28);
fecha2021.setDate(fecha2021.getDate() + 1);
console.log(fecha2021);

let fecha2020 = new Date(2020, 1, 28);
fecha2020.setDate(fecha2020.getDate() + 1);
console.log(fecha2020);

// Intento de crear una fecha inválida
let fechaInvalida = new Date(2021, 0, 35);
console.log(fechaInvalida);

// Función para calcular días entre dos fechas
function diasEntreFechas(fecha1, fecha2) {
    let diferenciaMs = Math.abs(fecha1 - fecha2);
    return Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
}
console.log(diasEntreFechas(new Date(2025, 2, 27), new Date(1995, 5, 15)));

// Crear fecha de cumpleaños con string
let fechaCumpleString = new Date("1995-06-15");
console.log(fechaCumpleString);