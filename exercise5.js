//? 5) En el siguiente arreglo de usuarios busca el usuario con el email rosario@gmail.com
//? Usuarios:[
//?     {
//?         name: “Rafael perez”,
//?         email: rafael@gmail.com
//?      },
// ?     {
// ?       name: “Rosario Perez”,
//?          email: rosario@gmail.com
// ?      },
// ?     {
// ?         name: “Rodrigo avila”,
//?          email: rodrigo@gmail.com
//?       },
//?      {
//?          name: “Alberto Campos”,
//?          email: alberto@gmail.com
//?       },


//?    ],

const users = [
    {
        name: "Rafael Perez",
        email: "rafael@gmail.com"
    },
    {
        name: "Rosario Perez",
        email: "rosario@gmail.com"
    },
    {
        name: "Rodrigo avila",
        email: "rodrigo@gmail.com"
    },
    {
        name: "Alberto Campos",
        email: "alberto@gmail.com"
    }  
];
const result = users.find((users) => users.email === "rosario@gmail.com")
console.log("¡usuario encontrado!", result);

