//? 8)Agrega 3 arreglos que contenga al menos 2 elementos cada uno de los arreglos será diferente uno será de tipo numérico, uno string y otro booleano. Concatena los 3 arreglos, usando “concat”.

const numbers = [1,2,3];
const strings = ["hello", "world"];
const booleans = [true, false];

const result = numbers.concat(strings,booleans);
console.log("Arreglos concatenados", result);