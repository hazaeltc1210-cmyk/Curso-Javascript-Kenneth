//arrays - son utiles cuando se manejan listados 
//como declaramos un array 

let myArray = []//estructura de datos, se utiliza mejor la primera opcion 
let myArray2 = new Array () //mas puro lo

console.log(myArray)
console.log(myArray2)

//inicializacion 

myArray = [1]
myArray2 = new Array (1)
console.log(myArray)
console.log(myArray2)

myArray = [1, 2 , 3, 4]
myArray2 = new Array (1, 2 , 3, 4)
console.log(myArray)
console.log(myArray2)

myArray = ["Kenneth", "Torres", "Casanova", 32, true]
myArray2 = new Array ("Kenneth", "Torres", "Casanova", 32, true)
console.log(myArray)
console.log(myArray2)

myArray2 = new Array (3)
myArray2[0] = "Kenneht"
myArray2[1] = "Torres"
myArray2[2] = "Casanova"

console.log(myArray2)


myArray = []
myArray [2] = "Kenneth"
myArray [1] = "Torres"
myArray [4] = "Torres"

console.log(myArray)

//metodos comunes 

myArray = []

//push y pop

myArray.push("Kenneth")
myArray.push("Hazael")
myArray.push("Torres")
myArray.push("Casanova")
myArray.push(32)

console.log(myArray)

console.log(myArray.pop()) // el pop elimina el ultimo elemento del array y lo devuelve

myArray.pop()// el pop elimina el ultimo elemento del array 

console.log(myArray)

//shift y unshift 
console.log(myArray.shift())// elimina el primer elemento del array 
console.log(myArray)

myArray.unshift("Kenneth", "Casanova")// lo devuelve al principio 
console.log(myArray)

//length

console.log(myArray.length)//Es propiedad, mide cuanto mide nuestro array 

//clear 
//myArray = []
myArray.length = 0 // alternativa para borrar 
console.log(myArray)

//Slice 
myArray =["Kenneth", "Torres", "Casanova", 32, true]
let myNeyArray = myArray.slice (1, 2) //devuelve una copia superficial de la porcion 

console.log(myArray)
console.log(myNeyArray)

//splice 
myArray.splice(1, 3)
console.log(myArray)

myArray =["Kenneth", "Torres", "Casanova", 32, true]

myArray.splice(1, 2, "nuevo elemento")
console.log(myArray)