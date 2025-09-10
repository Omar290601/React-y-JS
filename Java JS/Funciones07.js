//const sumar = function (nuemro){
   // return nuemro `Esto es una suma ${nuemro + nuemro}`;
//}

//const suma_valores = (numero1, numero2) => `la suma es ${numero1 + numero2}`;

//console.log(suma_valores(5, 10));

const obtenerCursos =  ( ) => {
    return{
        nombre: "JavaScript",
        duracion: "3 meses",
        valor: "Gratis"
    }
}
console.log(obtenerCursos());
console.table(obtenerCursos());


const cursos = obtenerCursos();
console.log(cursos.nombre);
