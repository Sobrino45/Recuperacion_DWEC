document.addEventListener("DOMContentLoaded", () => {
  const talleres = ["Teatro", "Fotografía", "Robótica", "Cocina creativa", "Arte urbano"];
  const tallerSelect = document.getElementById("taller");

  talleres.forEach(taller => {
    const option = document.createElement("option");
    option.value = taller;
    option.textContent = taller;
    tallerSelect.appendChild(option);
  });

  const emailInput = document.getElementById("email");
  document.querySelectorAll("input[name='modalidad']").forEach(radio => {
    radio.addEventListener("change", () => {
      emailInput.disabled = radio.value !== "online";
    });
  });

  document.getElementById("formTaller").addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    // Nombre
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("errorNombre");
    errorNombre.textContent = "";
    if (nombre === "") {
      errorNombre.textContent = "El nombre es obligatorio";
      valid = false;
    }

    // Teléfono
    const telefono = document.getElementById("telefono").value.trim();
    const errorTelefono = document.getElementById("errorTelefono");
    errorTelefono.textContent = "";
    if (!/^([67]\d{8})$/.test(telefono)) {
      errorTelefono.textContent = "Teléfono no válido (debe comenzar por 6 o 7 y tener 9 dígitos)";
      valid = false;
    }

    // Taller
    const taller = tallerSelect.value;
    const errorTaller = document.getElementById("errorTaller");
    errorTaller.textContent = "";
    if (!taller) {
      errorTaller.textContent = "Debe seleccionar un taller";
      valid = false;
    }

    // Modalidad
    const modalidad = document.querySelector('input[name="modalidad"]:checked');
    const errorModalidad = document.getElementById("errorModalidad");
    errorModalidad.textContent = "";
    if (!modalidad) {
      errorModalidad.textContent = "Debe seleccionar una modalidad";
      valid = false;
    } else if (modalidad.value === "online") {
      const email = document.getElementById("email").value.trim();
      const errorEmail = document.getElementById("errorEmail");
      errorEmail.textContent = "";
      if (!email) {
        errorEmail.textContent = "Debe introducir un correo electrónico";
        valid = false;
      }
    }

    // Fecha
    const fecha = new Date(document.getElementById("fecha").value);
    const errorFecha = document.getElementById("errorFecha");
    errorFecha.textContent = "";
    const dia = fecha.getDay(); // 0 domingo - 6 sábado
    if (dia === 0 || dia === 6) {
      errorFecha.textContent = "Los talleres solo pueden empezar entre lunes y viernes";
      valid = false;
    }

    // Hora
    const [hora, minutos] = document.getElementById("hora").value.split(":").map(Number);
    const errorHora = document.getElementById("errorHora");
    errorHora.textContent = "";
    let horarioValido = false;
    if (dia >= 1 && dia <= 4) {
      horarioValido = hora >= 10 && hora < 13;
    } else if (dia === 5) {
      horarioValido = hora >= 17 && hora < 20;
    }
    if (!horarioValido) {
      errorHora.textContent = "Horario no válido para el día seleccionado";
      valid = false;
    }

    if (valid) {
      alert("Formulario enviado correctamente");
    }
  });
});
