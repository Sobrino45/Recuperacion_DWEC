document.addEventListener('DOMContentLoaded', function () {
    const seguros = ["Adeslas", "Asisa", "Caser Salud", "DKV", "Mapfre", "Sanitas"];
    const selectSeguro = document.getElementById('seguro');
    seguros.forEach(seguro => {
        let option = document.createElement('option');
        option.value = seguro;
        option.textContent = seguro;
        selectSeguro.appendChild(option);
    });

    const tipoMedicoRadios = document.getElementsByName("medico");
    const especialidadSelect = document.getElementById("especialidad");
    tipoMedicoRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.value === "especialista" && radio.checked) {
                especialidadSelect.disabled = false;
            } else {
                especialidadSelect.disabled = true;
                especialidadSelect.value = "";
            }
        });
    });
});