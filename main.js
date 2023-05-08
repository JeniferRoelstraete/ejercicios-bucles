//ejercicio 1
let numero = 2
for( let i = 1; i < 11; i++) {
    console.log(`${i} x ${numero} = ${i*numero}`)
    
}
console.log(`Fin`)

//ejercicio 2

/* //let numeroIngresado1 = Number (prompt(`ingrese su numero:`))
let acumulador1 = 0

while (numeroIngresado !== 0) {
    acumulador1 = acumulador1 + numeroIngresado
    console.log('numeroIngresado: ', numeroIngresado);
    console.log('acumulador: ', acumulador);
   // numeroIngresado = Number (prompt(`ingrese su numero:`))
}
 */

//ejercicio 3
/* const numeroIncognita = 35
const numeroMayor = 'el numero ingresado es mayor, vuelve a intentarlo'
const numeroMenor = 'el numero ingresado es menor, vuelve a intentarlo'
const acierto = 'Ganaste, has adivinado el número.'
let numeroIngresado = Number (prompt(`Ingrese su numero: del 1 al 100`))

let acumulador = 1

while (numeroIngresado !== numeroIncognita) {
   acumulador = acumulador + 1
    if (numeroIngresado > numeroIncognita) {
        alert(numeroMayor)
    } else if (numeroIngresado < numeroIncognita) {
        alert(numeroMenor)
    }
    numeroIngresado = Number (prompt(`Ingrese su numero: del 1 al 100`))

} 
alert(`Felicitaciones ha adivinado el número en ${acumulador} veces`) */

//ejercicio 4
/* let numeroIngresado3 = Number(prompt(`Ingrese su numero`))
let divisores = [];

for (let divisor = 2; divisor < numeroIngresado3/2; divisor++) {
    if (numeroIngresado3 % divisor === 0) {
        divisores.push(divisor)
    }
}

if (divisores.length === 0) {
    console.log('El número ingresado es primo')
} else {
    console.log('El número ingresado no es primo')
} */

//ejercicio 5
/* let numeroIngresado = Number(prompt(`Ingrese su numero`))

// Imprimo cada vez que encuentro un divisor (no se conservan los divisores)
for (let divisor = 0; divisor <= numeroIngresado; divisor++) {
    if (numeroIngresado % divisor === 0) {
        console.log(divisor)
    }
}

// Guardando los divisores en un array (se conservan y puedo imprimirlos posteriormente)
let divisores = []
for(let divisor = 0; divisor <= numeroIngresado; divisor++) {
    if (numeroIngresado % divisor === 0) {
        divisores.push(divisor)
    }
}

console.log(divisores) */


// Ejercicio 6
/* let miArray = ['Naranja','Pomelo','Mandarina','Pera','Damasco','Coco','Kiwi','Sandia','Limón','Frutilla']

for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i])
} */

// Ejercicio 7
/* let miArrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < miArrayNumerico.length; i++) {
    console.log(miArrayNumerico[i] * 2)
} */

/* // Ejercicio 8
const persona1 = {
    nombre: 'Juan',
    apellido: 'Pérez',
    dni: 34343434,
    edad: 45
}

const persona2 = {
    nombre: 'Monica',
    apellido: 'Pérez',
    dni: 34343432,
    edad: 40
}

const persona3 = {
    nombre: 'Rodolfo',
    apellido: 'Pérez',
    dni: 54343423,
    edad: 15
}

const persona4 = {
    nombre: 'Juanita',
    apellido: 'Pérez',
    dni: 58002303,
    edad: 12
}

const persona5 = {
    nombre: 'Martín',
    apellido: 'Pérez',
    dni: 60023234,
    edad: 8
} */

/* const grupoFamiliar = [persona1, persona2, persona3, persona4, persona5]

// console.table(grupoFamiliar)
for (let i = 0; i < grupoFamiliar.length; i++) {
    console.table(grupoFamiliar[i])
} */

// Ejercicio 9
/* let miArrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < miArrayNumerico.length; i++) {
    if (miArrayNumerico[i] % 2 !== 0) { // Condición número impar
        console.log(miArrayNumerico[i])
    }
} */

/* // Ejercicio 10
let numeroIngresado = Number(prompt('Ingrese un número (0 para terminar):'))
let sumaPar = 0
let sumaImpar = 0

while (numeroIngresado !== 0) {
    if (numeroIngresado % 2 === 0) { // Condición número par
        sumaPar = sumaPar + numeroIngresado
    } else {            // Si no es par, es porque es impar
        sumaImpar = sumaImpar + numeroIngresado
    }
    numeroIngresado = Number(prompt('Ingrese un número (0 para terminar):'))
}

console.log(`Sumatoria números pares: ${sumaPar}`)
console.log(`Sumatoria números impares: ${sumaImpar}`)
 */
/* 
// Ejercicio 11
let miArrayNumerico1 = [100, 200, 7, 4, 5, 9, 40, 8, 19, 80];
let valorMaximo = miArrayNumerico1[0]

for (let i = 0; i < miArrayNumerico1.length; i++) {
    if (miArrayNumerico1[i] > valorMaximo) {
        valorMaximo = miArrayNumerico1[i]
    }
}

console.log(valorMaximo) */

// Ejercicio 12
/* let miArrayNumerico1 = [100, 200, 7, 4, 5, 9, 40, 8, 19, 80];
let valorMinimo = miArrayNumerico1[0]

for (let i = 0; i < miArrayNumerico1.length; i++) {
    if (miArrayNumerico1[i] < valorMinimo) {
        valorMinimo = miArrayNumerico1[i]
    }
}

console.log(valorMinimo) */

// ejercicio 13

/* let nombreJugador1 = prompt('Jugador 1: Ingrese su nombre')
let nombreJugador2 = prompt('Jugador 2: Ingrese su nombre')
let ingresoJugadorOne = prompt(`${nombreJugador1}: Ingrese Piedra, Papel o Tijera`).toUpperCase()
let ingresoJugadorTwo = prompt(`${nombreJugador2}: Ingrese Piedra, Papel o Tijera`).toUpperCase()

while (ingresoJugadorOne === ingresoJugadorTwo) {
    ingresoJugadorOne = prompt(`${nombreJugador1}: Ingrese Piedra, Papel o Tijera`).toUpperCase()
    ingresoJugadorTwo = prompt(`${nombreJugador2}: Ingrese Piedra, Papel o Tijera`).toUpperCase()
}

if (ingresoJugadorOne === 'PIEDRA' && ingresoJugadorTwo === 'TIJERA' || ingresoJugadorOne === 'TIJERA' && ingresoJugadorTwo === 'PAPEL' || ingresoJugadorOne === 'PAPEL' && ingresoJugadorTwo === 'PIEDRA') {
    alert('El jugador 1 ha ganado!')
} else {
    alert('El jugador 2 ha ganado!')
} */

// Ejercicio 14
/* const asterisco = '*'
let asteriscos = asterisco;

for (let i = 0; i < 5; i++) {
    console.log(asteriscos)
    asteriscos = asteriscos + asterisco
}
 */

// Ejercicio 15
/* const asterisco = '*****'
let asteriscos = asterisco;

for (let i = 5; i > 0; i--) {
    console.log(asteriscos.substring(0, i))
} */

// Ejercicio 16
/* let arregloParaOrdenar = [1, 10, 5, 2, 9, 11, 25, 8, 2, 3]

console.log(`Arreglo antes de ordenar: ${arregloParaOrdenar}`)

for (let i = 0; i < arregloParaOrdenar.length; i++) {
    for (let j = 0; j < arregloParaOrdenar.length - 1; j++) {
        if (arregloParaOrdenar[j] > arregloParaOrdenar[j + 1]) {
            const auxiliar = arregloParaOrdenar[j + 1]
            arregloParaOrdenar[j + 1] = arregloParaOrdenar[j]
            arregloParaOrdenar[j] = auxiliar
        }
    }
}

console.log(`Arreglo después de ordenar: ${arregloParaOrdenar}`) */