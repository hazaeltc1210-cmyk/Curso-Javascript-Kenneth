//Strings - cadenas de texto 
let myName = "Kenneth"
let greeting = "Hola ," + myName + "!"
console.log(greeting)
console.log(typeof greeting)

/*imprime Hola, kenneth! */

//Longitud de cadena de texto 
console.log(greeting.length)

// Acceso a caracteres 
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[13])

//con esto imprime que letra hay en cada posicion 

//Metodos comunes 
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Kenneth"))
console.log(greeting.indexOf("Hazael"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Kenneth"))
console.log(greeting.includes("Hazael"))
console.log(greeting.slice(0, 10))//Incluye el indice
console.log(greeting.replace("Kenneth", "Hazael"))//Remplaza la primera palabra


//Template literals (Plantillas literales) crean string de varias lineas

let message =`Hola, este es mi 
curso JavaScript` // con `puedes imprimir en varias lineas 

console.log(message)
let email ="hazaeltc1210@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}`)



