// operadores para realizar operaciones 

//Operadores aritmeticos 
let a = 5
let b = 10

console.log(a + b) //suma
console.log(a - b) //resta
console.log(a * b) //multiplicacion
console.log(a / b) //division


console.log(a % b) //modulo o residuo de la division
console.log(a ** b) //potencia exponencial 

a++ //incremento en 1
console.log(a) //incremento 

b-- //decremento en 1
console.log(b) //decremento
//operadores de asignacion 

let myVariable = 2
console.log(myVariable) 
myVariable +=2
console.log(myVariable) //suma y asignacion

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// operaciones de comparacion 

console.log(a > b)//mayor que 
console.log(a < b)//menor que 
console.log(a >= b)//mayor o igual que 
console.log(a <= b)//menor o igual que 
console.log(a == b)//igualdad por valor
console.log(a == 6) 
console.log(a === 6) //igualdad por valor y tipo de dato
console.log(a ==="6")
console.log(a != 6) //diferente por valor
console.log(a !== "6") //diferente por valor o tipo de dato
console.log(0 == false) //igualdad por valor
console.log(1 == false) //igualdad por valor
console.log(2 == false) //igualdad por valor
console.log(0 == "") //igualdad por valor
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "hola")
console.log(0 === "")
console.log(undefined == null) //igualdad por valor
console.log(undefined === null) //igualdad por valor y tipo de dato

//Valores verdaderos - truthy values
//todos los numeros positivos y negativos distintos de cero
//todas las cadenas de texto menos las vacias
// el boolean true 

//valores falsos - falsy values
// el numero cero (0)
// la cadena vacia ("")
// el boolean false
// null
// undefined
// NaN (Not a Number)
//0n

//operadores logicos 
//operador AND (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

//or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 && 15 > 20 || 30 > 40)
console.log(5 > 10 && 15 > 20 || 30 < 40)

//not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10))
console.log(!(5 < 10))
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// operadores ternarios 

const isRaining = true
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")
const isRaining2 = false 
isRaining2 ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

