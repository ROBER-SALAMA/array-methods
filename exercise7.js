//? 7) En el siguiente arreglo: [1,2,3,4,5,6,7], verifica si todos los números son mayores a 5.

const array = [1,2,3,4,5,6,7];
const result = array.every((num) => num > 5);
console.log("todos los numeros son mayores a 5: ", result);