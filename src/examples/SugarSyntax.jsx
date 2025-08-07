//// sread operator

const numeros = [1, 2, 3, 4, 5]
const numeros2 = numeros.concat([6, 7, 8, 9, 10])
console.log(numeros2)       


const numeros3 = [  ...numeros, 6, 7, 8, 9, 10  ]
console.log(numeros3)   

//// destructoring

const colores = ['rojo', 'verde', 'azul', 'amarillo']
const rojo = colores[0]
const verde = colores[1]
const azul = colores[2]
const amarillo = colores[3]
console.log(rojo, verde, azul, amarillo)        
const [rojo2, verde2, azul2, amarillo2] = colores
console.log(rojo2, verde2, azul2, amarillo2)    

/// destructuring de objetos
const persona = {
    nombre: 'Ivan',
    edad: 30,
    ciudad: 'Madrid'
}
const { nombre, edad, ciudad } = persona
console.log(nombre, edad, ciudad)   

//operador ternario
const edadPersona = 18
const mensaje = edadPersona >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad'
console.log(mensaje)


///ararow functions
const saludar = (a,b) => {
    return a+b}

const saludar2 = (a,b) => a+b