//Condicionales - estructura de control 

//if, else if, else

    //if(si)
    let age = 32 


    if (age ==32){
        //bloque de codigo es todo lo que este en la llave 
        console.log("La edad es 32")
    }

    //else (si no)

    if (age !=32)/*!significa si es distento que*/{
        //bloque de codigo es todo lo que este en la llave 
        console.log("La edad no es 32")
    }

        if (age ==32){ 
        console.log("La edad es 32")
    } else { 
        console.log("La edad no es 32")
    }

    //else if (si no, si)

        if (age ==32){ 
        console.log("La edad es 32")
    }else if(age < 18){
        console.log("Es menor de 18")// primero else if
    } 
    else { 
        console.log("La edad no es 32 ni es menor de edad")
    }

    //Operadores ternarios 
    //forma rapida de escribir if y else 
    const message = age === 32 ? "La edad es 32" : "La edad no es 32"
    console.log(message)

    //switch establecemos una condicion
    //alternativa de anidar if y else 
    //comparar una unica variable con muchas variables posibles

    let day = 5
    let dayName

    switch (day) {
        case 0:
            dayName = "Lunes"
            break
        case 1:
            dayName = "Martes"
            break
        case 2:
            dayName = "Miercoles"
            break
        case 3:
            dayName = "Jueves"
            break
        case 4:
            dayName = "Viernes"
            break
        case 5:
            dayName = "Sabado"
            break
        case 6:
            dayName = "Domingo"
        break
        default:
            dayName ="Numero de dia incorrecto"
    }

    console.log(dayName)

    //switch es muy legible, una varible se compara con muchos datos
    //Se ejecuta muy rapida

    //Limitaciones, el switch es menos flexible, es mas plano 