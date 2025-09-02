const curso = {
    nombre: "Python",
    duracion: `${16} hr`,
    profesor : "Omar",
    modulos: {
        clase : "Introduccion a Python",
        duracion : `${2} hr`
    }
   
}

console.log({curso});
console.log(curso);
console.log(curso.nombre);
console.log(curso.duracion);
console.log(curso.profesor);

console.table(curso);
console.info(curso);