// if/elsè/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let Name = "Hazael"
if(Name === "Hazael"){
    console.log("Ese es mi nombre")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "HazaelTc"
let contraseña = "12345"

if (usuario, contraseña === "HazaelTc", "12345") {
    console.log("usuario y contraseña correcto ")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -1

if (numero > 0) {
    console.log("Es positivo")
} else if (numero < 0) {
    console.log("Es negativo")
} else {
    console.log("Es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 17 
let edadMinima = 18

if (age >= edadMinima) {
    console.log("Puede votar")
} else {
    console.log(`No puede votar. Le faltan ${edadMinima - age} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

const message = age === 18 ? "adulto" : "menor"
console.log(message)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let estacion = "diciembre"

if (estacion === "mayo" || estacion === "junio" || estacion === "julio") {
    console.log("Es verano")
} else if (estacion === "agosto" || estacion === "septiembre" || estacion === "octubre") {
    console.log("Es otoño")
} else if (estacion === "noviembre" || estacion === "diciembre" || estacion === "enero") {
    console.log("Es invierno")
} else if (estacion === "febrero" || estacion === "marzo" || estacion === "abril") {
    console.log("Es primavera")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let mes = "abril"

if (mes === "mayo" || mes === "junio" || mes === "julio") {
    console.log("Es verano")
    console.log("Número de días: 31")
} else if (mes === "agosto" || mes === "septiembre" || mes === "octubre") {
    console.log("Es otoño")
    console.log("Número de días: 31")
} else if (mes === "noviembre" || mes === "diciembre" || mes === "enero") {
    console.log("Es invierno")
    console.log("Número de días: 31")
} else if (mes === "febrero") {
    console.log("Es primavera")
    console.log("Número de días: 28")
} else if (mes === "marzo" || mes === "abril") {
    console.log("Es primavera")
    console.log("Número de días: 31")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let saludo = "italiano"
let idioma
switch(saludo) {
    case "ingles":
        idioma = "hello"
    break
    case "italiano":
        idioma = "ciao"
    break
    case "español":
        idioma = "hola"
    break
    case "aleman":
        idioma = "hallo"
    break
}

console.log(idioma)
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let month = "abril"
let estacionFinal

switch (month) {
  case "febrero":
  case "marzo":
  case "abril":
    estacionFinal = "primavera"
    break
  case "mayo":
  case "junio":
  case "julio":
    estacionFinal = "verano"
    break
  case "agosto":
  case "septiembre":
  case "octubre":
    estacionFinal = "otoño"
    break
  case "noviembre":
  case "diciembre":
  case "enero":
    estacionFinal = "invierno"
    break
  default:
    estacionFinal = "mes inválido"
}

console.log(estacionFinal)
// 10. Usa un switch para hacer de nuevo el ejercicio 7

let mm = "febrero"
let station 
let dias

switch(mm){
  case "marzo":
  case "abril":
    station = "primavera",
    dias = "Tiene 31 dias"
  break
  case "mayo":
  case "junio":
  case "julio":
    station = "verano",
    dias = "Tiene 31 dias"
    break
  case "agosto":
  case "septiembre":
  case "octubre":
    station = "otoño",
    dias = "Tiene 31 dias"
    break
  case "noviembre":
  case "diciembre":
  case "enero":
    station= "invierno",
    dias ="Tiene 31 dias"
    break
   case "febrero":
    station ="primavera",
    dias = "Tiene 28 dias"
    break
  default:
    estacionFinal = "mes inválido"
}
console.log(station + " " + dias)