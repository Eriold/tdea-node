const estudiante1 = require('./calculos');

//console.log(obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));
console.log(estudiante1.estudiante);
console.log('El promedio del estudiante es: ' + estudiante1.obtenerPromedio(estudiante1.estudiante.notas.matematicas, estudiante1.estudiante.notas.ingles, estudiante1.estudiante.notas.programacion));