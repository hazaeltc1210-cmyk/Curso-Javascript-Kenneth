//Map almacenamos en ellas un conjunto de datos o diccionarios, en donde cada elemento tiene una clave y un valor, a diferencia de los sets que solo almacenan valores
//Declaracion
let myMap = new Map() //estructura de datos, se utiliza mejor la primera opcion
console.log(myMap)

//inicializacion
myMap = new Map([
  ["name", "Kenneth"],
  ["email", "hazaeltc1210@gmail.com"],
  ["age", 32]
]);
console.log(myMap);

//Metodos y propiedades comunes

//set actualiza un elemento o actualizarlo

myMap.set("alias", "Hato") //agrega un elemento al final del map
myMap.set("name", "Kenneth Hazael")
console.log(myMap) // si la clave no existe, se agrega al final del map, si la clave ya existe, se actualiza el valor de esa clave

//get recuperar el valor de un elemento

console.log(myMap.get("name")) //devuelve el valor de la clave especificada
console.log(myMap.get("surname"))

//has verificar si una clave existe en el map
console.log(myMap.has("surname")) //devuelve true si la clave existe, false en caso contrario

//delete eliminar un elemento del map

myMap.delete("email") //elimina el elemento con la clave especificada
console.log(myMap)

//keys devuelve un iterador con las claves del map

console.log(myMap.keys()) //devuelve un iterador con las claves del map

//values devuelve un iterador con los valores del map
console.log(myMap.values()) //devuelve un iterador con los valores del map

//size devuelve el numero de elementos del map
console.log(myMap.size) //devuelve el numero de elementos del map

console.log(myMap.entries()) //devuelve un iterador con los pares clave-valor del map
//clear eliminar todos los elementos del map
myMap.clear() //elimina todos los elementos del map
console.log(myMap) //devuelve un map vacio
