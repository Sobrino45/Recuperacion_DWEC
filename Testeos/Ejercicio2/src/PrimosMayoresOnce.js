function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filtrarPrimosMayoresOnce(array) {
    return array
        .filter(num => num > 11 && esPrimo(num)) // Filtrar primos > 11
        .sort((a, b) => a - b); // Ordenar de menor a mayor
}
