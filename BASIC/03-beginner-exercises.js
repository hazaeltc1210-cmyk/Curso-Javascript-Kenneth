// 1. Escribe un comentario en una línea
//Hola son un comentario en una linea

// 2. Escribe un comentario en varias lineas
/*Hola, soy un comentario en 
varias lineas, y puedo escribir todo lo que quiera*/ 

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let String = "Hola, soy un estudiante"
let number = 33
let soyfeliz = true
let undefinedValue
let mexicocampeon = null 
let symbol = Symbol("guacamole")
let BigNumber = BigInt(3141624185265464861616)

// 4. Imprime por consola el valor de todas las variables
console.log(String)
console.log(number)
console.log(soyfeliz)
console.log(undefinedValue)
console.log(mexicocampeon)
console.log(symbol)
console.log(BigNumber)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof String)
console.log(typeof number)
console.log(typeof soyfeliz)
console.log(typeof undefinedValue)
console.log(typeof mexicocampeon)
console.log(typeof symbol)
console.log(typeof BigNumber)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
String = "Hola, soy yo de nuevo"
number = 45
soyfeliz = false
undefinedValue = "Ahora se lo que quiero"
mexicocampeon = "Mexico no fue campeon pero llego a semis"
symbol = Symbol("pico de gallo")
BigNumber = BigInt(9876543210123456789012345678901234567890)

console.log(String)
console.log(number)
console.log(soyfeliz)
console.log(undefinedValue)
console.log(mexicocampeon)
console.log(symbol)
console.log(BigNumber)


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
String = 123n
number = Symbol("Tarta de manzana")
soyfeliz = null
undefinedValue = true
mexicocampeon = undefinedValue
symbol = 37
BigNumber = "Hola, invertimos todo"

console.log(String)
console.log(number)
console.log(soyfeliz)
console.log(undefinedValue)
console.log(mexicocampeon)
console.log(symbol)
console.log(BigNumber)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const texto = "Quiero ser el mejor programador de mexico"
const number2 = 122122
const iamHappy = true 
const indefinido = undefined
const mexicoFeliz = null 
const Simbolo = Symbol ("Chimichurri")
const BigNumber2 = BigInt(31415926535897932384626433832795028841971)


// 9. A continuación, modifica los valores de las constantes
const texto2 = "Quiero ser el mejor programador"
const number3 = 1221
const iamHappy2 = false
const indefinido2 = undefined
const mexicoFeliz2 = null 
const Simbolo2 = Symbol ("Chimichurri")
const BigNumber3 = BigInt(314159265358979323846264338327950288471)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/* A partir de la 7 a la 9 tuvemos error, al momento de cambiar los valores, asignar nombres similares y que let y const chocan
si tiene el mismo nombre de variable, tambien tiene que ver la sintaxis con la cual es escrita

Con const, no es posible cambiar la variable, lo que se declara en const no se puede modificar, lo unico que quedaria es 
hacer un nuevo bloque*7 */