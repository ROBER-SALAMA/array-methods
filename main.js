const array = [50,57,23,28,339,10,11,56]; 
const result = array.filter(x=>x%2===0).reduce((a,b)=>a+b,0);
console.log(result);