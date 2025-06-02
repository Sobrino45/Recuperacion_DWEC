// Escribe tu código aquí
addEventListener("load",inicializarEvento,false);

function inicializarEvento() {
    cargarGeneros();

    let generosDropdown = document.getElementById("inputGenero");
    generosDropdown.addEventListener("change", seleccionarGenero, false);
}

let xhr;

function cargarGeneros() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "api/cargar_generos_json.php", true);
    xhr.addEventListener("readystatechange", procesarGeneros);
    xhr.send();
}

function procesarGeneros() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        try {
            console.log("Datos recibidos:", xhr.responseText);
            let datos = JSON.parse(xhr.responseText);
            let generosDropdown = document.getElementById("inputGenero");
            generosDropdown.innerHTML = 
            '<option value="">Todos</option>';

            for (let genero of datos) {
                let opcion = document.createElement("option");
                opcion.value = genero.id;
                opcion.textContent = genero.genero;
                generosDropdown.appendChild(opcion);
            }
        } catch (ex) {
            console.error("Error al procesar el JSON:", ex.message);
        }
    }
}

function seleccionarGenero(e) {
    let peliculaId = e.target.value;
    if (peliculaId) {
        xhr = new XMLHttpRequest();
        xhr.open("GET",`api/cargar_peliculas_xml.php?genero=${peliculaId}`,true);

        xhr.addEventListener("readystatechange", procesarPeliculas);
        xhr.send();
    } else {
        document.getElementById("inputTabla").innerHTML = "";
    }
}

function procesarPeliculas() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        try {
            let datos = JSON.parse(xhr.responseText);
            let mostartPeliculas = document.getElementById("inputTabla");
            mostartPeliculas.innerHTML = "<tr>";
            mostartPeliculas.innerHTML = "<td>Título</td>";
            mostartPeliculas.innerHTML = "<td>Año</td>";
            mostartPeliculas.innerHTML = "<td>Género</td>";
            mostartPeliculas.innerHTML = "<td>Portada</td>";
            mostartPeliculas.innerHTML = "<td>Detalles</td>";
            mostartPeliculas.innerHTML = "</tr>";

            for (let pelicula of datos) {
                mostartPeliculas.innerHTML += `
                <tr>
                    <td>${pelicula.titulo}</td>
                    <td>${pelicula.anio}</td>
                    <td>${pelicula.genero}</td>
                    <td><img src="images${pelicula.poster}.jpg</td>
                    <td><button type='button' class='btn btn-warning'></button></td>
                </tr>
            `;
        }
        } catch (ex) {
            console.error("Error al procesar el JSON:", ex.message);
        }
    }
}

function mostrarTrama(e) {
    let detallesId = e.target.value;
    let detallesText = e.target.options[e.target.selectedIndex].text;

    if (detallesId) {
        document.getElementById("inputTrama").innerHTML = `
            <p><strong>Trama:</strong></p>
            <p>${detallesText.sinopsis}</p>
        `;
    } else {
        document.getElementById("inputTrama").innerHTML = "";
    }
}