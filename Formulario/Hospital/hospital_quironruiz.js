let SEGUROS_MEDICOS = [
  { value: 1, texto: "Adeslas" },
  { value: 2, texto: "Asisa" },
  { value: 3, texto: "Caser Salud" },
  { value: 4, texto: "DKV" },
  { value: 5, texto: "Mapfre" },
  { value: 6, texto: "Sanitas" },
];

// Escribe aquí tu código
const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

// Cargar los seguros médicos
const selectSeguro = document.getElementById("inputSeguroMedico");
SEGUROS_MEDICOS.forEach((seguro) => {
  let option = document.createElement("option");
  option.value = seguro.texto;
  option.textContent = seguro.texto;
  selectSeguro.appendChild(option);
});

const radioFamilia = document.getElementById("inputMedicoFamilia");
const radioEspecialista = document.getElementById("inputMedicoEspecialista");
const selectEspecialidad = document.getElementById("inputEspecialidad");

radioFamilia.addEventListener("change", function () {
  selectEspecialidad.disabled = true;
});

radioEspecialista.addEventListener("change", function () {
  selectEspecialidad.disabled = false;
});

document.getElementById("enviar").addEventListener("click", function (e) {
  e.preventDefault();
  let valido = true;

  document.querySelectorAll(".error-msg").forEach((el) => el.remove());

  const form = document.forms["miformulario"];
  const nombre = form["inputNombre"].value.trim();
  const apellidos = form["inputApellidos"].value.trim();
  const dni = form["inputDNI"].value.trim();
  const seguro = form["inputSeguroMedico"].value;
  const esEspecialista = document.getElementById(
    "inputMedicoEspecialista"
  ).checked;
  const especialidad = form["inputEspecialidad"].value;
  const fecha = form["inputFechaCita"].value;
  const hora = form["inputHoraCita"].value;

  const mostrarError = (elemento, mensaje) => {
    const error = document.createElement("div");
    error.className = "error-msg text-danger mt-1";
    error.textContent = mensaje;
    elemento.parentNode.appendChild(error);
    valido = false;
  };

  if (!nombre) mostrarError(form["inputNombre"], "Nombre obligatorio.");
  if (!apellidos)
    mostrarError(form["inputApellidos"], "Apellidos obligatorios.");

  const dniRegex = /^\d{8}[a-zA-Z]$/;
  if (!dniRegex.test(dni)) {
    mostrarError(form["inputDNI"], "Formato de DNI no válido.");
  } else {
    const numero = parseInt(dni.substring(0, 8));
    const letra = dni.substring(8).toUpperCase();
    const letraCorrecta = letrasDNI[numero % 23];
    if (letra !== letraCorrecta) {
      mostrarError(form["inputDNI"], "La letra del DNI no es válida.");
    }
  }

  if (!seguro)
    mostrarError(form["inputSeguroMedico"], "Selecciona un seguro médico.");

  if (esEspecialista && !especialidad) {
    mostrarError(form["inputEspecialidad"], "Selecciona una especialidad.");
  }

  if (!fecha) {
    mostrarError(form["inputFechaCita"], "Selecciona una fecha.");
  } else {
    const diaSemana = new Date(fecha).getDay();
    if (diaSemana < 1 || diaSemana > 4) {
      mostrarError(
        form["inputFechaCita"],
        "El día de la cita sólo puede ser de lunes a jueves."
      );
    } else {
      if (!hora) {
        mostrarError(form["inputHoraCita"], "Selecciona una hora.");
      } else {
        const [h, m] = hora.split(":").map(Number);
        const minutos = h * 60 + m;
        if (diaSemana >= 1 && diaSemana <= 3) {
          // Lunes a Miércoles
          if (minutos < 600 || minutos > 855) {
            mostrarError(
              form["inputHoraCita"],
              "Hora no válida (10:00 a 14:15)."
            );
          }
        } else if (diaSemana === 4) {
          // Jueves
          if (minutos < 1110 || minutos > 1200) {
            mostrarError(
              form["inputHoraCita"],
              "Hora no válida (18:30 a 20:00)."
            );
          }
        }
      }
    }
  }

  if (valido) {
    form.submit();
  }
});
