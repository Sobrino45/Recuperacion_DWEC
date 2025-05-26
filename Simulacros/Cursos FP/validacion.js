document.addEventListener("DOMContentLoaded", () => {
  const cursos = ["Electricidad", "Administración", "Informática", "Cocina", "Estética", "Mecánica"];
  const cursoSelect = document.getElementById("curso");

  cursos.forEach(curso => {
    const option = document.createElement("option");
    option.value = curso;
    option.textContent = curso;
    cursoSelect.appendChild(option);
  });

  const emailInput = document.getElementById("email");
  document.querySelectorAll("input[name='modalidad']").forEach(radio => {
    radio.addEventListener("change", () => {
      emailInput.disabled = radio.value !== "distancia";
    });
  });

  document.getElementById("formularioRegistro").addEventListener("submit", function(e) {
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

    // DNI
    const dni = document.getElementById("dni").value.trim().toUpperCase();
    const errorDni = document.getElementById("errorDni");
    errorDni.textContent = "";
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dniRegex = /^([0-9]{8})([A-Z])$/;
    if (!dniRegex.test(dni)) {
      errorDni.textContent = "Formato de DNI incorrecto";
      valid = false;
    } else {
      const [, num, letra] = dni.match(dniRegex);
      const letraCorrecta = letras[parseInt(num) % 23];
      if (letra !== letraCorrecta) {
        errorDni.textContent = "Letra del DNI no válida";
        valid = false;
      }
    }

    // Curso
    const curso = cursoSelect.value;
    const errorCurso = document.getElementById("errorCurso");
    errorCurso.textContent = "";
    if (!curso) {
      errorCurso.textContent = "Debe seleccionar un curso";
      valid = false;
    }

    // Modalidad
    const modalidad = document.querySelector('input[name="modalidad"]:checked');
    const errorModalidad = document.getElementById("errorModalidad");
    errorModalidad.textContent = "";
    if (!modalidad) {
      errorModalidad.textContent = "Debe seleccionar una modalidad";
      valid = false;
    } else if (modalidad.value === "distancia") {
      const email = document.getElementById("email").value.trim();
      const errorEmail = document.getElementById("errorEmail");
      errorEmail.textContent = "";
      if (!email) {
        errorEmail.textContent = "Debe introducir un correo";
        valid = false;
      }
    }

    // Fecha
    const fecha = new Date(document.getElementById("fecha").value);
    const errorFecha = document.getElementById("errorFecha");
    errorFecha.textContent = "";
    const dia = fecha.getDay(); // 0 domingo - 6 sábado
    if (dia === 0 || dia === 6) {
      errorFecha.textContent = "Los cursos solo pueden empezar entre lunes y viernes";
      valid = false;
    }

    // Hora
    const [hora, minutos] = document.getElementById("hora").value.split(":").map(Number);
    const errorHora = document.getElementById("errorHora");
    errorHora.textContent = "";
    let horarioValido = false;
    if (dia >= 1 && dia <= 4) {
      horarioValido = hora >= 9 && hora < 14;
    } else if (dia === 5) {
      horarioValido = hora >= 15 && hora < 18;
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
