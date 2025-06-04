
window.onload = function () {
    fetch('cargar_plataformas_xml.php')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            let plataformas = data.getElementsByTagName("plataforma");
            let contenedor = document.getElementById("categorias");
            for (let plataforma of plataformas) {
                let id = plataforma.getElementsByTagName("id")[0].textContent;
                let nombre = plataforma.getElementsByTagName("nombre")[0].textContent;
                let boton = document.createElement("button");
                boton.textContent = nombre;
                boton.onclick = () => cargarProductos(id);
                contenedor.appendChild(boton);
            }
        });
};

function cargarProductos(id_plataforma) {
    let url = 'cargar_videojuegos_json.php';
    if (id_plataforma) url += '?id_plataforma=' + id_plataforma;

    fetch(url)
        .then(response => response.json())
        .then(productos => {
            let contenedor = document.getElementById("productos");
            contenedor.innerHTML = "";
            productos.forEach(producto => {
                let div = document.createElement("div");
                div.className = "producto";
                div.innerHTML = `
                    <img src="img/${producto.imagen}" alt="${producto.titulo}">
                    <h3>${producto.titulo}</h3>
                    <p><strong>${producto.precio} €</strong></p>
                    <button onclick="alert('${producto.sinopsis.replace(/'/g, "\'")}')">Detalles</button>
                `;
                contenedor.appendChild(div);
            });
        });
}
