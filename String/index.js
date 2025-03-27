// 1. Longitud del nombre completo
let nombreCompleto = "Juan Pérez Gómez";
console.log(nombreCompleto.length);

// 2. Bucle con charAt
let nombre = "Juan";
for (let i = 0; i < nombre.length; i++) {
    console.log(nombre.charAt(i));
}

// 3. Conversión a mayúsculas y minúsculas
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());

// 4. Análisis de una frase
let frase = "En un lugar de la Mancha de cuyo nombre no quiero acordarme";
console.log(frase.length);
console.log(frase.indexOf("Mancha"));
console.log(frase.indexOf("Quijote"));
console.log(frase.lastIndexOf("de"));

// 5. Extraer 'lugar'
console.log(frase.substring(frase.indexOf("lugar"), frase.indexOf("lugar") + 5));

// 6. includes
console.log(frase.includes("cuyo"));
console.log(frase.includes("lugar", 12));

// 7. endsWith
console.log(frase.endsWith("acordarme"));
console.log(frase.endsWith("hidalgo"));

// 8. replace
console.log(frase.replace("Mancha", "Andalucía"));

// 9. split
let alimentos = "Cebollas;Patatas;Pimientos;Tomates";
let alimentosArray = alimentos.split(";");
console.log(alimentosArray);

// 10. startsWith
console.log(frase.startsWith("En"));
console.log(frase.startsWith("lugar"));

// 11. Extraer 'lugar' con substr y substring
console.log(frase.substr(frase.indexOf("lugar"), 5));
console.log(frase.substring(frase.indexOf("lugar"), frase.indexOf("lugar") + 5));

// 12. trim
let nombreEspaciado = "   Javier Soldado   ";
console.log(nombreEspaciado.trim());

// 13. padEnd y padStart
let palabra = "JavaScript";
palabra = palabra.padEnd(15, "*");
palabra = palabra.padStart(20, "#");
console.log(palabra);

// 14. padEnd y padStart con diferentes caracteres
let texto = "JavaScript";
texto = texto.padEnd(15, "*");
texto = texto.padStart(20, "#");
console.log(texto);
