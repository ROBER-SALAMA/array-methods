//? 1) Realiza la multiplicación de el siguiente arreglo: [10, “5”, “7”,9,23,”17”].
const array = [10,"5","7",9,23,"17"];
const result = array.map(x => Number(x)).reduce((a, b) => a*b)
console.log("exercise one", result);