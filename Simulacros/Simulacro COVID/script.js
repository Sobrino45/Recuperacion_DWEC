document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    let valido = true;

    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const dni = document.getElementById('dni').value.trim().toUpperCase();
    const vacuna = document.getElementById('vacuna').value;
    const tipoRiesgoInput = document.querySelector('input[name="tipo"]:checked');
    const tipoRiesgo = tipoRiesgoInput ? tipoRiesgoInput.value : null;
    const categoria = document.getElementById('categoria').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (!nombre) {
        document.getElementById('error-nombre').textContent = "Campo obligatorio";
        valido = false;
    }

    if (!apellidos) {
        document.getElementById('error-apellidos').textContent = "Campo obligatorio";
        valido = false;
    }

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dniRegex = /^\d{8}[A-Z]$/;
    if (!dniRegex.test(dni)) {
        document.getElementById('error-dni').textContent = "Formato de DNI no válido";
        valido = false;
    } else {
        const numero = parseInt(dni.slice(0, 8), 10);
        const letra = dni.slice(8);
        const letraCorrecta = letras[numero % 23];
        if (letra !== letraCorrecta) {
            document.getElementById('error-dni').textContent = "La letra del DNI no es válida";
            valido = false;
        }
    }

    if (vacuna === "<Seleccionar>") {
        document.getElementById('error-vacuna').textContent = "Debe seleccionar una vacuna";
        valido = false;
    }

    if (!tipoRiesgo) {
        document.getElementById('error-tipo').textContent = "Debe seleccionar un tipo de paciente";
        valido = false;
    }

    if (tipoRiesgo === "riesgo" && categoria === "") {
        document.getElementById('error-categoria').textContent = "Debe seleccionar una categoría";
        valido = false;
    }

    if (!fecha) {
        document.getElementById('error-fecha').textContent = "Campo obligatorio";
        valido = false;
    } else {
        const fechaObj = new Date(fecha);
        const dia = fechaObj.getDay(); // 0 = domingo, 6 = sábado

        if (dia === 0 || dia === 6) {
            document.getElementById('error-fecha').textContent = "El día de la cita sólo puede ser de lunes a viernes";
            valido = false;
        } else {
            if (!hora) {
                document.getElementById('error-hora').textContent = "Campo obligatorio";
                valido = false;
            } else {
                const horaParts = hora.split(":");
                const horas = parseInt(horaParts[0], 10);
                const minutos = parseInt(horaParts[1], 10);

                if (dia >= 1 && dia <= 4) {
                    if (horas < 9 || (horas === 13 && minutos > 30) || horas > 13) {
                        document.getElementById('error-hora').textContent = "La hora debe estar entre 09:00 y 13:30";
                        valido = false;
                    }
                } else if (dia === 5) {
                    if (horas < 16 || horas > 18 || (horas === 18 && minutos > 0)) {
                        document.getElementById('error-hora').textContent = "La hora debe estar entre 16:00 y 18:00";
                        valido = false;
                    }
                }
            }
        }
    }

    if (valido) {
        alert("Formulario enviado correctamente");
        // this.reset(); // Puedes activar esto si quieres limpiar el formulario al enviar
        // document.getElementById('categoria').disabled = true; // Y desactivar categoría de nuevo
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const vacunas = ["<Seleccionar>", "Pfizer", "Moderna", "AstraZeneca", "Janssen"];
    const selectVacuna = document.getElementById('vacuna');

    vacunas.forEach(vacuna => {
        let option = document.createElement('option');
        option.value = vacuna;
        option.textContent = vacuna;
        selectVacuna.appendChild(option);
    });

    const tipoPacienteRadios = document.getElementsByName("tipo");
    const categoriaSelect = document.getElementById("categoria");

    tipoPacienteRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.value === "riesgo" && radio.checked) {
                categoriaSelect.disabled = false;
            } else {
                categoriaSelect.disabled = true;
                categoriaSelect.value = "";
            }
        });
    });
});
