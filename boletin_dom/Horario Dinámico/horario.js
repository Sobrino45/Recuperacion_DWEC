let dias = [
    { id: 1, nombre: 'L' },
    { id: 2, nombre: 'M' },
    { id: 3, nombre: 'X' },
    { id: 4, nombre: 'J' },
    { id: 5, nombre: 'V' }
];

let tramos = [
    { id: 1, hora: '8:00-9:00', descripcion: '1ª Hora' },
    { id: 2, hora: '9:00-10:00', descripcion: '2ª Hora' },
    { id: 3, hora: '10:00-11:00', descripcion: '3ª Hora' },
    { id: 4, hora: '11:00-11:30', descripcion: 'RECREO' },
    { id: 5, hora: '11:30-12:30', descripcion: '4ª Hora' },
    { id: 6, hora: '12:30-13:30', descripcion: '5ª Hora' },
    { id: 7, hora: '13:30-14:30', descripcion: '6ª Hora' }
];

let asignaturas = [
    { id: 1, nombre: '', grupo:'', aula: '', color: 'white' },
    { id: 2, nombre: 'Música', grupo:'1º ESO A', aula: 'Aula 6', color: 'blue' },
    { id: 3, nombre: 'Entorno Desarrollo', grupo:'1ºDAW', aula: 'Aula 9C', color: 'magenta' },
	{ id: 4, nombre: 'Comput. y robótica', grupo:'1ºESO D', aula: 'Aula 10A', color: 'cyan' },
	{ id: 5, nombre: 'Comput. y robótica', grupo:'1ºESO B', aula: 'Aula VII', color: 'yellow' },
	{ id: 6, nombre: 'Despl. Aplic. Web', grupo:'2ºDAW', aula: 'Aula 10B', color: 'green' },
	{ id: 7, nombre: 'Guardia Mant.', grupo:'', aula: 'Taller Informática', color: 'SteelBlue' },
    { id: 8, nombre: 'Música', grupo:'1º ESO B', aula: 'Aula 7', color: 'brown' },
    { id: 9, nombre: 'RECREO', grupo:'', aula: '', color: 'LightGrey' },
];


let horario = [
    {
        idTramo: 1, asignaturas: [
            { idDia: 1, idAsignatura: 2},
            { idDia: 2, idAsignatura: 3},
            { idDia: 3, idAsignatura: 3},
            { idDia: 4, idAsignatura: 1},
            { idDia: 5, idAsignatura: 7}
        ]
    },
	{
        idTramo: 2, asignaturas: [
            { idDia: 1, idAsignatura: 7},
            { idDia: 2, idAsignatura: 2},
            { idDia: 3, idAsignatura: 3},
            { idDia: 4, idAsignatura: 1},
            { idDia: 5, idAsignatura: 4}
        ]
    },
	{
        idTramo: 3, asignaturas: [
            { idDia: 1, idAsignatura: 1},
            { idDia: 2, idAsignatura: 4},
            { idDia: 3, idAsignatura: 7},
            { idDia: 4, idAsignatura: 1},
            { idDia: 5, idAsignatura: 5}
        ]
    },
	{
        idTramo: 4, asignaturas: [
            { idDia: 1, idAsignatura: 9},
            { idDia: 2, idAsignatura: 9},
            { idDia: 3, idAsignatura: 9},
            { idDia: 4, idAsignatura: 9},
            { idDia: 5, idAsignatura: 9}
        ]
    },
	{
        idTramo: 5, asignaturas: [
            { idDia: 1, idAsignatura: 1},
            { idDia: 2, idAsignatura: 1},
            { idDia: 3, idAsignatura: 1},
            { idDia: 4, idAsignatura: 8},
            { idDia: 5, idAsignatura: 6}
        ]
    },
	{
        idTramo: 6, asignaturas: [
            { idDia: 1, idAsignatura: 1},
            { idDia: 2, idAsignatura: 1},
            { idDia: 3, idAsignatura: 1},
            { idDia: 4, idAsignatura: 8},
            { idDia: 5, idAsignatura: 6}
        ]
    },
	{
        idTramo: 7, asignaturas: [
            { idDia: 1, idAsignatura: 1},
            { idDia: 2, idAsignatura: 1},
            { idDia: 3, idAsignatura: 1},
            { idDia: 4, idAsignatura: 1},
            { idDia: 5, idAsignatura: 6}
        ]
    }
];

// Escribe aquí tu código
function getAsignatura(idAsignatura) {
   for (i = 0; i < asignaturas.length; i++) {
      if (asignaturas[i].id == idAsignatura) return asignaturas[i];
   }
   return null;
}

function getDia(idDia) {
   for (i = 0; i < dias.length; i++) {
      if (dias[i].id == idDia) return dias[i];
   }
   return null;
}

function getTramo(idTramo) {
   for (i = 0; i < tramos.length; i++) {
      if (tramos[i].id == idTramo) return tramos[i];
   }
   return null;
}

document.getElementById("inputCrearHorario").addEventListener("click", crearHorario);

function crearHorario() {
    let tabla = document.getElementById("horario");
    tabla.innerHTML = "";

    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");

    let thHora = document.createElement("th");
    thHora.textContent = "Hora";
    headerRow.appendChild(thHora);

    dias.forEach(dia => {
        let th = document.createElement("th");
        th.textContent = getDia(dia.id).nombre; 
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    tabla.appendChild(thead);

    let tbody = document.createElement("tbody");

    horario.forEach(tramo => {
        let fila = document.createElement("tr");

        let tdHora = document.createElement("td");
        let tramoInfo = getTramo(tramo.idTramo); 
        tdHora.textContent = `${tramoInfo.hora} (${tramoInfo.descripcion})`;
        fila.appendChild(tdHora);

        dias.forEach(dia => {
            let td = document.createElement("td");

            let momento = tramo.asignaturas.find(a => a.idDia === dia.id);
            if (momento) {
                let asignatura = getAsignatura(momento.idAsignatura); 
                td.textContent = `${asignatura.nombre}\n${asignatura.grupo}`;
                td.style.backgroundColor = asignatura.color;

                td.addEventListener("mouseenter", () => {
                    document.getElementById("aula").textContent = asignatura.aula;
                });

                td.addEventListener("mouseleave", () => {
                    document.getElementById("aula").textContent = "";
                });
            }
            fila.appendChild(td);
        });

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
}