// Capturar las entradas del usuario mediante prompt()
var entrada1 = prompt("Introduce el primer número:");
var entrada2 = prompt("Introduce el segundo número:");
var entrada3 = prompt("Introduce el tercer número:");

// Convertir las entradas en números
var num1 = parseInt(entrada1);
var num2 = parseInt(entrada2);
var num3 = parseInt(entrada3);

// Declaración de un objeto para almacenar los resultados de las operaciones
var resultados = {};

// Declaramos un array para almacenar los resultados
var resultadosArray = [];

// Función para sumar dos números
function sumar(a, b) {
  return a + b;
}

// Función para restar dos números
function restar(a, b) {
  return a - b;
}

// Función para concatenar
function concatenar(a, b) {
  return a + b;
}

// Función para dividir dos números
function dividir(a, b) {
  if (b === 0) {
    return "Error: división entre cero";
  } else {
    return a / b;
  }
}

// Función para calcular el porcentaje de un número
function porcentaje(a, b) {
  return (a * b) / 100;
}

// Realizamos las operaciones y almacenamos los resultados en el objeto "resultados"
resultados.suma = sumar(num1, num2);
resultados.resta = restar(num2, num3);
resultados.concatenacion = concatenar(entrada1, entrada2);
resultados.division = dividir(num3, num1);
resultados.porcentaje = porcentaje(num2, 50);

// Agregamos los resultados al array push()
resultadosArray.push(resultados.suma);
resultadosArray.push(resultados.resta);
resultadosArray.push(resultados.concatenacion);
resultadosArray.push(resultados.division);
resultadosArray.push(resultados.porcentaje);

// Mostramos los resultados mediante alert() o console.log()
alert("El resultado de la suma es: " + resultados.suma);
console.log("El resultado de la resta es: " + resultados.resta);
alert("El resultado de la concatenación es: " + resultados.concatenacion);
console.log("El resultado de la división es: " + resultados.division);
alert("El resultado del porcentaje es: " + resultados.porcentaje);

// Mostramos los resultados almacenados en el array mediante alert() o console.log()
alert("Los resultados almacenados en el array son: " + resultadosArray);
console.log("Los resultados almacenados en el array son: " + resultadosArray);