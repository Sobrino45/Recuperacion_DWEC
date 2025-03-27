// Valor absoluto
console.log(Math.abs(3));
console.log(Math.abs(-5));
console.log(Math.abs(8));
console.log(Math.abs(-3.5));
console.log(Math.abs(12.2));

// Valor de PI
console.log(Math.PI);

// Cálculo de coseno y seno en grados
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
console.log(Math.cos(degToRad(30))); // Coseno de 30°
console.log(Math.sin(degToRad(45))); // Seno de 45°
console.log(Math.cos(Math.PI / 3));  // Coseno de π/3 radianes

// Exponencial
console.log(Math.exp(3));

// Logaritmos
console.log(Math.log10(12.5)); // Logaritmo base 10
console.log(Math.log(15.7));   // Logaritmo natural (ln)

// Raíz cuadrada
console.log(Math.sqrt(128.12));

// Redondeo
console.log(Math.round(2.7));
console.log(Math.round(-2.7));
console.log(Math.round(12.4));
console.log(Math.round(12.5));
console.log(Math.round(-0.6));
console.log(Math.round(0.6));

// Ceil
console.log(Math.ceil(2.7));
console.log(Math.ceil(-2.7));
console.log(Math.ceil(12.4));
console.log(Math.ceil(12.5));
console.log(Math.ceil(-0.6));
console.log(Math.ceil(0.6));

// Floor
console.log(Math.floor(2.7));
console.log(Math.floor(-2.7));
console.log(Math.floor(12.4));
console.log(Math.floor(12.5));
console.log(Math.floor(-0.6));
console.log(Math.floor(0.6));

// Min y Max
console.log(Math.min(-8, 7));
console.log(Math.min(12, 5));
console.log(Math.min(-12, 5));
console.log(Math.max(-8, 7));
console.log(Math.max(12, 5));
console.log(Math.max(-12, 5));

// Número aleatorio entre 1 y 6
console.log(Math.floor(Math.random() * 6) + 1);

// Número aleatorio entre 26 y 79
console.log(Math.floor(Math.random() * (79 - 26 + 1)) + 26);

// Redondeo de PI
console.log(Math.PI.toFixed(2));
console.log(Math.PI.toFixed(3));
console.log(Math.PI.toFixed(4));
console.log(Math.PI.toFixed(5));
