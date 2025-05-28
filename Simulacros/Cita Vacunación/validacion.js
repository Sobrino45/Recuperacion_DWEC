document.getElementById('formularioCita').addEventListener('submit', function (e) {
    e.preventDefault();
    let valido = true;

    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const dni = document.getElementById('dni').value.trim().toUpperCase();
    const seguro = document.getElementById('seguro').value;
    const tipoMedico = document.querySelector('input[name="medico"]:checked').value;
    const especialidad = document.getElementById('especialidad').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (!nombre) {
        document.getElementById('errorNombre').textContent = "Campo obligatorio";
        valido = false;
    }
    if (!apellidos) {
        document.getElementById('errorApellidos').textContent = "Campo obligatorio";
        valido = false;
    }

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dniRegex = /^\d{8}[A-Z]$/;
    if (!dniRegex.test(dni)) {
        document.getElementById('errorDNI').textContent = "Formato de DNI no válido";
        valido = false;
    } else {
        const numero = parseInt(dni.slice(0, 8), 10);
        const letra = dni.slice(8);
        const letraCorrecta = letras[numero % 23];
        if (letra !== letraCorrecta) {
            document.getElementById('errorDNI').textContent = "La letra del DNI no es válida";
            valido = false;
        }
    }

    if (!seguro) {
        document.getElementById('errorSeguro').textContent = "Campo obligatorio";
        valido = false;
    }

    if (tipoMedico === "especialista" && !especialidad) {
        document.getElementById('errorEspecialidad').textContent = "Debe seleccionar una especialidad";
        valido = false;
    }

    if (!fecha) {
        document.getElementById('errorFecha').textContent = "Campo obligatorio";
        valido = false;
    } else {
        const fechaObj = new Date(fecha);
        const dia = fechaObj.getDay();
        if (dia < 1 || dia > 4) {
            document.getElementById('errorFecha').textContent = "El día de la cita sólo puede ser de lunes a jueves";
            valido = false;
        } else {
            const horaParts = hora.split(":");
            const horas = parseInt(horaParts[0], 10);
            const minutos = parseInt(horaParts[1], 10);
            if (dia >= 1 && dia <= 3) {
                if (horas < 10 || (horas === 14 && minutos > 15) || horas > 14) {
                    document.getElementById('errorHora').textContent = "La hora debe estar entre 10:00 y 14:15";
                    valido = false;
                }
            } else if (dia === 4) {
                if (horas < 18 || (horas === 18 && minutos < 30) || horas > 20 || (horas === 20 && minutos > 0)) {
                    document.getElementById('errorHora').textContent = "La hora debe estar entre 18:30 y 20:00";
                    valido = false;
                }
            }
        }
    }

    if (valido) {
        alert("Formulario enviado correctamente");
    }
});