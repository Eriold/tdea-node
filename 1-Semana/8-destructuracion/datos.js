const { estudiante, obtenerPromedio } = require('./calculos');
let nota = estudiante.notas;
console.log('El nombre del estudiante es: ' + estudiante.nombre);
console.log('El promedio del estudiante es: ' + obtenerPromedio(nota.matematicas, nota.ingles, nota.programacion));

let { nombre, edad: year, notas: { matematicas, ingles, programacion } } = estudiante;
console.log('El nombre del estudiante es: ' + nombre)
console.log('El promedio del estudiante es: ' + obtenerPromedio(matematicas, ingles, programacion));
console.log('La eded del estudiante es: ' + year);