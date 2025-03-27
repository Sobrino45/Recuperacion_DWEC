// 1. Creación de arrays
let ej1_array1 = ['Plátanos', 'Naranjas', 'Pomelos', 'Fresas', 'Limones'];
let ej1_array2 = new Array('Plátanos', 'Naranjas', 'Pomelos', 'Fresas', 'Limones');
let ej1_array3 = Array.of('Plátanos', 'Naranjas', 'Pomelos', 'Fresas', 'Limones');
let ej1_array4 = Array.from(['Plátanos', 'Naranjas', 'Pomelos', 'Fresas', 'Limones']);
console.log(ej1_array1, ej1_array2, ej1_array3, ej1_array4);

// 2. Suma de elementos de un array disperso
let ej2_array = [5, 2, , 3, -2, 7, , 9];
let sum = ej2_array.reduce((acc, num) => acc + (num || 0), 0);
console.log(sum);

// 3. push y pop
let ej3_array = ['Huelva', 'Sevilla', 'Córdoba'];
ej3_array.push('Jaén', 'Granada');
console.log(ej3_array);
ej3_array.pop();
console.log(ej3_array);

// 4. unshift y shift
let ej4_array = ['Huelva', 'Sevilla', 'Córdoba'];
ej4_array.unshift('Cádiz');
console.log(ej4_array);
ej4_array.shift();
console.log(ej4_array);

// 5. delete
let ej5_array = ['Huelva', 'Sevilla', 'Córdoba'];
delete ej5_array[1];
console.log(ej5_array);

// 6. Ordenación
let ej6_array = ['Huelva', 'Sevilla', 'Córdoba', 'Jaén', 'Almería', 'Granada', 'Málaga', 'Cádiz'];
ej6_array.sort();
console.log(ej6_array);
ej6_array.reverse();
console.log(ej6_array);

// 7. splice eliminar e insertar
let ej7_array = ['Plátanos', 'Naranjas', 'Pomelos', 'Fresas'];
ej7_array.splice(1, 1);
console.log(ej7_array);
ej7_array.splice(1, 0, 'Limones');
console.log(ej7_array);

// 8. slice
let ej8_array = ['Plátanos', 'Naranjas', 'Pomelos', 'Fresas'];
let sliced = ej8_array.slice(2, 3);
console.log(sliced, ej8_array);

// 9. Concatenación
let ej9_array = ['Plátanos', 'Naranjas', 'Pomelos'].concat(['Cebollas', 'Pepinos', 'Pimientos']);
console.log(ej9_array);

// 10. Recorrer de 4 maneras
let ej10_array = ['Plátanos', 'Naranjas', 'Pomelos'];
ej10_array.forEach(el => console.log(el));
for (let i = 0; i < ej10_array.length; i++) console.log(ej10_array[i]);
for (let el of ej10_array) console.log(el);
console.log([...ej10_array]);

// 11. indexOf
let ej11_array = ['Plátanos', 'Naranjas', 'Pomelos', 'Fresas'];
console.log(ej11_array.indexOf('Pomelos'));
console.log(ej11_array.indexOf('Sandía'));

// 12. includes
console.log(ej11_array.includes('Naranjas'));
console.log(ej11_array.includes('Peras'));

// 13. every
let ej13_array1 = [2, 12, 22, 30, 36];
console.log(ej13_array1.every(num => num % 2 === 0));
let ej13_array2 = [2, 12, 22, 7, 30, 36];
console.log(ej13_array2.every(num => num % 2 === 0));

// 14. map
let ej14_array = [2, 9, 7, 5.4, 8];
let squaredArray = ej14_array.map(num => num * num);
console.log(squaredArray);

// 15. filter
let ej15_array = [2, 7, 22, 3, 30, 17];
let oddNumbers = ej15_array.filter(num => num % 2 !== 0);
console.log(oddNumbers);

// 16. find
let ej16_array = [2, 12, 7, 22, 3, 30, 17];
console.log(ej16_array.find(num => num % 2 !== 0));

// 17. lastIndexOf
let ej17_array = ['Plátanos', 'Naranjas', 'Pomelos', 'Plátanos', 'Fresas'];
console.log(ej17_array.lastIndexOf('Plátanos'));
