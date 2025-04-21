class Alumno {
    constructor(codigo, nombre, apellido1, apellido2, dni) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.dni = dni;
        this.notas = [];
    }

    agregarNotas(...notas) {
        this.notas.push(...notas);
    }

    obtenerCorreoCorporativo(dominio) {
        const quitarTildes = (texto) =>
            texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n");

        let inicial = this.nombre.charAt(0).toLowerCase();
        let apellido1 = quitarTildes(this.apellido1.toLowerCase()).slice(0, 3).padEnd(3, "_");
        let apellido2 = quitarTildes(this.apellido2.toLowerCase()).slice(0, 3).padEnd(3, "_");
        let dniSinLetra = this.dni.slice(0, -1);
        let usuario = `${inicial}${apellido1}${apellido2}${dniSinLetra.slice(-3)}`;

        return `${usuario}@${dominio}`;
    }

    obtenerNotasMedias() {
        let notasAgrupadas = {};

        // Agrupar notas por asignatura
        this.notas.forEach(({ asignatura, nota }) => {
            if (!notasAgrupadas[asignatura]) {
                notasAgrupadas[asignatura] = [];
            }
            notasAgrupadas[asignatura].push(nota);
        });

        // Calcular medias
        return Object.keys(notasAgrupadas).map((asignatura) => {
            let notas = notasAgrupadas[asignatura];
            let media = notas.reduce((acc, val) => acc + val, 0) / notas.length;
            return { asignatura, notaMedia: parseFloat(media.toFixed(2)) };
        });
    }
}

class Aula {
    constructor(numeroAula, nombreAula) {
        this.numeroAula = numeroAula;
        this.nombreAula = nombreAula;
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    get numeroAlumnos() {
        return this.alumnos.length;
    }
}
