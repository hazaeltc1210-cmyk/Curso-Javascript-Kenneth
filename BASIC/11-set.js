//Set diferencia entre set y arrays 
//Declaracion 
let mySet = new Set() //estructura de datos, se utiliza mejor la primera opcion
//let mySet2 = new Set() //Esta es la forma de definir un set vacio
//inicializacion
mySet = new Set(["Kenneth", "Torres", "Casanova", 32, true, "hazaeltc1210@gmail.com"])
console.log(mySet)
//console.log(mySet2)

//Metodos comunes

//add y delete
mySet.add("Hazael") //lo agrega al final del set
console.log(mySet)
mySet.delete("Hazael") //lo elimina del set
console.log(mySet)

console.log(mySet)
console.log(mySet.delete("Kenneth"))
console.log(mySet)

//has

console.log(mySet.has("Kenneth")) //devuelve true si el elemento existe en el set, de lo contrario devuelve false
console.log(mySet.has("Torres"))

// size 
console.log(mySet.size)

// convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

mySet = new Set(myArray)
console.log(mySet)

//

mySet.add("Kenneth")
mySet.add("Kenneth")
mySet.add("Kenneth")
mySet.add("kenneth")
console.log(mySet) //no se repite el elemento, ya que un set no permite elementos duplicados

