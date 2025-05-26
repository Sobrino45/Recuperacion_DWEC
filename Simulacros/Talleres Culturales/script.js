document.addEventListener("DOMContentLoaded", () => {
  const talleres = ["Pintura", "Teatro", "Cerámica", "Escritura Creativa", "Fotografía"];
  const tallerSelect = document.getElementById("taller");
  talleres.forEach(t => {
    const option = document.createElement("option");
    option.value = t;
    option.textContent = t;
    tallerSelect.appendChild(option);
  });

  const modalidadRadios = document.getElementsByName("modalidad");
  const plataforma = document.getElementById("plataforma");
  modalidadRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      plataforma.disabled = radio.value !== "online";
    });
  });

  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    const dni = document.getElementById("dni").value.trim().toUpperCase();
    const errorDni = document.getElementById("errorDni");
    errorDni.textContent = "";

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dniRegex = /^\d{8}[A-Z]$/;

    if (!dniRegex.test(dni)) {
      errorDni.textContent = "Formato de DNI no válido";
      isValid = false;
    } else {
      const numero = parseInt(dni.slice(0, 8), 10);
      const letra = dni.slice(8);
      const letraCorrecta = letras[numero % 23];
      if (letra !== letraCorrecta) {
        errorDni.textContent = "La letra del DNI no es válida";
        isValid = false;
      }
    }

    const modalidad = document.querySelector('input[name="modalidad"]:checked').value;
    const errorPlataforma = document.getElementById("errorPlataforma");
    errorPlataforma.textContent = "";

    if (modalidad === "online" && !plataforma.value.trim()) {
      errorPlataforma.textContent = "Debe indicar la plataforma online";
      isValid = false;
    }

    const fecha = new Date(document.getElementById("fecha").value);
    const errorFecha = document.getElementById("errorFecha");
    errorFecha.textContent = "";
    const dia = fecha.getDay();
    if (dia === 0 || dia === 6) {
      errorFecha.textContent = "El taller no puede realizarse en fin de semana";
      isValid = false;
    }

    const hora = document.getElementById("hora").value;
    const errorHora = document.getElementById("errorHora");
    errorHora.textContent = "";

    const [h, m] = hora.split(":").map(Number);
    if (h < 10 || (h > 13 && h < 17) || h > 20) {
      errorHora.textContent = "Hora no válida. Talleres entre 10:00-13:00 y 17:00-20:00";
      isValid = false;
    }

    if (isValid) {
      alert("Formulario enviado correctamente");
    }
  });
});
