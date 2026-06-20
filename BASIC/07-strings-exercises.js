// 1. Concatena dos cadenas de texto
let myAdress = "Torres" 
let escribe = myAdress + " " +"Casanova" + "!" 

console.log(escribe)

// 2. Muestra la longitud de una cadena de texto
console.log(escribe.length)

// 3. Muestra el primer y último carácter de un string
console.log(escribe[0])
console.log(escribe[14])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(escribe.toUpperCase())
console.log(escribe.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let prueba = `Buela pelana
practicando javaScript`

console.log(prueba)
// 6. Interpola el valor de una variable en un string

let facebook = "Hazaeltc1210"
console.log(`Aloha, ${myAdress}! Tu facebook es ${facebook}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let conEspacios = "Torres Casanova!"
let sinEspacios = conEspacios.replace(/ /g, "-")
console.log(sinEspacios)  // Resultado: "Torres-Casanova!"

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let texto = "Torres Casanova!"
let contienePalabra = texto.includes("Casanova")
console.log(contienePalabra)  // Resultado: true

// 9. Comprueba si dos strings son iguales
let string1 = "Torres Casanova!"
let string2 = "Torres Casanova!"
let sonIguales = string1 === string2
console.log(sonIguales)  // Resultado: true

// 10. Comprueba si dos strings tienen la misma longitud
let string3 = "Torres Casanova!"
let string4 = "Hola"
let mismaLongitud = string3.length === string4.length
console.log(mismaLongitud)  // Resultado: false