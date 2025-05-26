document.addEventListener("DOMContentLoaded", () => {
  const actividades = ["Natación", "Spinning", "Yoga", "Pilates", "CrossFit", "Boxeo"];
  const actividadSelect = document.getElementById("actividad");

  actividades.forEach(act => {
    const option = document.createElement("option");
    option.value = act;
    option.textContent = act;
    actividadSelect.appendChild(option);
  });

  const sesionRadios = document.getElementsByName("sesion");
  const tamanoGrupo = document.getElementById("tamanoGrupo");

  sesionRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      tamanoGrupo.disabled = radio.value !== "grupal";
    });
  });

  document.getElementById("reservaForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Validación NIF
    const nif = document.getElementById("nif").value.trim().toUpperCase();
    const errorNif = document.getElementById("errorNif");
    errorNif.textContent = "";

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const nifRegex = /^(\d{8})([A-Z])$/;

    if (!nifRegex.test(nif)) {
      errorNif.textContent = "Formato de NIF no válido";
      isValid = false;
    } else {
      const [, numero, letra] = nif.match(nifRegex);
      const letraCorrecta = letras[parseInt(numero, 10) % 23];
      if (letra !== letraCorrecta) {
        errorNif.textContent = "La letra del NIF no es válida";
        isValid = false;
      }
    }

    // Validación grupo
    const sesion = document.querySelector('input[name="sesion"]:checked').value;
    const errorGrupo = document.getElementById("errorGrupo");
    errorGrupo.textContent = "";

    if (sesion === "grupal" && (!tamanoGrupo.value || tamanoGrupo.value <= 0)) {
      errorGrupo.textContent = "Debe indicar el tamaño del grupo";
      isValid = false;
    }

    // Validación fecha
    const fecha = new Date(document.getElementById("fecha").value);
    const errorFecha = document.getElementById("errorFecha");
    errorFecha.textContent = "";

    const dia = fecha.getDay(); // 0 (domingo) a 6 (sábado)
    if (dia < 2 || dia > 5) {
      errorFecha.textContent = "La reserva solo puede hacerse de martes a viernes";
      isValid = false;
    }

    // Validación hora
    const hora = document.getElementById("hora").value;
    const errorHora = document.getElementById("errorHora");
    errorHora.textContent = "";

    const [h, m] = hora.split(":").map(Number);
    let horaValida = false;

    if (dia >= 2 && dia <= 4) { // martes a jueves
      horaValida = h >= 8 && (h < 12 || (h === 12 && m === 0));
    } else if (dia === 5) { // viernes
      horaValida = h >= 17 && (h < 20 || (h === 20 && m <= 30));
    }

    if (!horaValida) {
      errorHora.textContent = "Hora no válida para el día seleccionado";
      isValid = false;
    }

    if (isValid) {
      alert("Formulario enviado correctamente");
    }
  });
});
