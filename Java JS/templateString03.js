const nombre = "Omar"
const apellido = "Juarez"
const edad = 30 
const dni = 12345678

const nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)

//Template String
console.log("Hola mi nombre es " + nombre + " " + apellido + ", tengo " + edad + " años y mi dni es " + dni)    

const nombreProducto = "Monitor 20 pulgadas"
const precio = 300
const disponible = true
const categoria = "Computacion"

console.log("El producto " + nombreProducto + " de la categoria " + categoria + " tiene un precio de: $" + precio + " y su disponibilidad es: " + disponible)

//Template String

function mostrarInfoProducto(){
    return `El producto ${nombreProducto} de la categoria ${categoria} tiene un precio de: $${precio} y su disponibilidad es: ${disponible}`
}
console.log(mostrarInfoProducto())

//Template String 

function suma () {
    return `La suma de 2 + 2 es: ${2 + 2}`
}
console.log(suma())