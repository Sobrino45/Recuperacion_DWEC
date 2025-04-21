// Creación de alumnos
const alumno4 = new Alumno("A004", "Fco. Javier", "Soldado", "Galvín", "44968715T");
const alumno1 = new Alumno("A001", "José Antonio", "Gómez", "Fernández", "12345678A");
const alumno2 = new Alumno("A002", "Sonia María", "Del Moral", "Núñez", "87654321B");
const alumno3 = new Alumno("A003", "Carlos Luis", "Ruiz", "Sánchez", "23456789C");

// Testeo métodos obtenerCorreoCorporativo()
console.log("Corporativo de Fco. Javier Soldado Galvín: " + alumno4.obtenerCorreoCorporativo("iesruizgijon.com") + " (debería ser fsolgal715@iesruizgijon.com)");
console.log("Corporativo de José Antonio Gómez Fernández: " + alumno1.obtenerCorreoCorporativo("iesruizgijon.com") + " (debería ser jgomfer678@iesruizgijon.com)");
console.log("Corporativo de Sonia María Del Moral Núñez: " + alumno2.obtenerCorreoCorporativo("almudeyne.com") + " (debería ser sdelnun321@almudeyne.com)");

// Agregar notas a los alumnos
alumno1.agregarNotas(
    { asignatura: "DWEC", nota: 6.3 },
    { asignatura: "DWEC", nota: 7.1 },
    { asignatura: "DIW", nota: 8.7 },
    { asignatura: "DIW", nota: 9.5 }
);
alumno2.agregarNotas(
    { asignatura: "DWEC", nota: 7.8 },
    { asignatura: "DWES", nota: 9.0 }
);
alumno3.agregarNotas(
    { asignatura: "DIW", nota: 5.5 },
    { asignatura: "DIW", nota: 6.7 }
);
alumno4.agregarNotas(
    { asignatura: "DWEC", nota: 8.2 },
    { asignatura: "DAWEB", nota: 7.4 }
);

// Testeo método obtenerNotasMedias()
console.log("Notas medias de José Antonio Gómez Fernández: ");
console.log(alumno1.obtenerNotasMedias());
console.log("=> Debería ser [{ asignatura: 'DWEC', notaMedia: 6.7 }, { asignatura: 'DIW', notaMedia: 9.1 }]");

console.log("Notas medias de Sonia María Del Moral Núñez: ");
console.log(alumno2.obtenerNotasMedias());
console.log("=> Debería ser [{ asignatura: 'DWEC', notaMedia: 7.8 }, { asignatura: 'DWES', notaMedia: 9.0 }]");

// Creamos tres aulas
const aula1 = new Aula("9A", "1º SMR");
const aula2 = new Aula("9B", "2º DAW");
const aula3 = new Aula("9C", "1º DAW");

aula1.agregarAlumno(alumno1);
aula2.agregarAlumno(alumno2);
aula2.agregarAlumno(alumno3);
aula3.agregarAlumno(alumno4);

console.log("Nº alumnos aula 9A: " + aula1.numeroAlumnos + " (debería ser 1)");
console.log("Nº alumnos aula 9B: " + aula2.numeroAlumnos + " (debería ser 2)");
console.log("Nº alumnos aula 9C: " + aula3.numeroAlumnos + " (debería ser 1)");
