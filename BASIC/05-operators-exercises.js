// 1. Crea una variable para cada operación aritmética
let a = 3 
let b = 5
console.log(a * b)

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operaciones aritméticas

let myVariable = 2
console.log(myVariable) 
myVariable +=2
console.log(myVariable) //suma y asignacion

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log (10 > 5)
console.log(5 < 10)
console.log(5 >= 4+1)
console.log(20 > 19)
console.log(a < b)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log (10 < 5)
console.log(5 > 10)
console.log(5 <= 4-1)
console.log(20 < 19)
console.log(a > b)

// 5. Utiliza el operador lógico and

console.log(a > b && a >= b++)

// 6. Utiliza el operador lógico or

console.log(a > b || a <= b++)

// 7. Combina ambos operadores lógicos
console.log(a > b && b < a || 5 <= "5")

// 8. Añade alguna negación
console.log(a > b && b < a || !(5 <= "5"))

// 9. Utiliza el operador ternario

const hoyVendi = true 
hoyVendi ? console.log("Si, hoy vendi $500 USD") : console.log("No, hoy no vendi ni un chicle")
const hoyVendi2 = false 
hoyVendi2 ? console.log("Si, hoy vendi $500 USD") : console.log("No, hoy no vendi ni un chicle")

// 10. Combina operadores aritméticos, de comparáción y lógicos

let x = 8 
let y = 9 

console.log(x + y)

console.log(x + y >= 20)

console.log(x + y >= 20 && a + b <= 5)