//Variables
let nombre = "Juan";
let apellido = "Pérez";
let edad = 25;
let esEstudiante = true;
const nacionalidad = "Mexicana";

//Imprimir variables
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);
console.log("Nacionalidad:", nacionalidad);

//Concatenación de variables
let mensaje = "Hola, mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años.";
console.log(mensaje);

//Interpolación de variables (template literals)
let mensaje2 = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;
console.log(mensaje2);

//Cambiar el valor de una variable
nombre = "María";
edad = 30;
console.log("Nuevo nombre:", nombre);
console.log("Nueva edad:", edad);

//Intentar cambiar el valor de una constante (esto causará un error)
//nacionalidad = "Argentina"; // Descomenta esta línea para ver el error   
            