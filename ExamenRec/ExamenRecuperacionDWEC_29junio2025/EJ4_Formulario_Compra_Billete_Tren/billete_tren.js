const ESTACIONES = [
    { id: 1, nombre: "Huelva" },
    { id: 2, nombre: "Sevilla" },
    { id: 3, nombre: "Córdoba" },
    { id: 4, nombre: "Málaga" }
];

const COMBINACIONES = [
    { origen: 1, destino: 2 }, // Huelva - Sevilla
    { origen: 2, destino: 1 }, // Sevilla - Huelva
    { origen: 2, destino: 3 }, // Sevilla - Córdoba
    { origen: 2, destino: 4 }, // Sevilla - Málaga 
    { origen: 3, destino: 2 }, // Córdoba - Sevilla
    { origen: 3, destino: 4 }, // Córdoba - Málaga
    { origen: 4, destino: 2 }, // Málaga - Sevilla
];



// Escribe aquí tu código
function validaCodigo(inputCodigoLector) {
    return /^[A-Z]{3}\d{3}([[A-Z]])$/g.test(inputCodigoLector);
}

function mayorDeEdad(inputFechaNacimiento, inputFecha) {
    let fechaNacimiento = inputFechaNacimiento;
    let fechaSalida = inputFecha;
    let edad = Math.abs(fechaNacimiento - fechaSalida);

    if (edad > 18) {

    } else {
        return "No podrás viajar hasta que cumplas 18 años";
    }
}

const selectEstacion = document.getElementById("inputOrigen");
ESTACIONES.forEach((estacion) => {
  let option = document.createElement("option");
  option.value = estacion.id;
  option.textContent = estacion.nombre;
  selectEstacion.appendChild(option);
});

const selectDestino = document.getElementById("inputDestino");
COMBINACIONES.forEach((destino) => {
    let option = document.createElement("option");
    option.value = destino.origen;
    option.textContent = destino.destino;
    selectDestino.appendChild(option);
});

const fecha = document.getElementById("inputFecha");
if (!fecha) {
    mostrarError(form["inputFechaCita"], "Selecciona una fecha.");
} else {
    const diaSemana = new Date(fecha).getDay();
    if (diaSemana < 1 || diaSemana > 5) {
        mostrarError(form["inputFechaCita"], "Debe ser entre lunes y viernes");
    } else {
        fechaActual = new Date();
        if (fecha < fechaActual) {
            mostrarError(form["inputFechaCita"], "La fecha no puede ser anterior a la actual");
        }
    }
}