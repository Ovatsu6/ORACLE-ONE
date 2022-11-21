console.log("Operaciones Aritmeticas");
const variableTexto = "contenido estatico";//indica que el valor de la constante no podra variar en el tiempo, tendra un dato estatico
console.log(variableTexto);//solo se declara const en la funcion o bloque de codigo
//variableTexto = "contedio DOS";

let nuevaVariableTexto = "contenido variable";//indica que el valor de la constante podra variar en el tiempo, no tendra un dato estatico
console.log(nuevaVariableTexto);//solo se declara let en la funcion o bloque de codigo
nuevaVariableTexto = "contenido cuatro";
console.log(nuevaVariableTexto);

var variableGlobal = "contenido variableafecta de forma global al codigo";//indica que el valor de la constante podra variar en el tiempo, no tendra un dato estatico
console.log(variableGlobal);
nuevaVariableTexto = "contenido seis";
console.log(variableGlobal);

const numEntero = 0;
const numDecimal = 20.5;

let sumaDosNumeros = 0;


console.log(sumaDosNumeros);

console.log(sumaDosNumeros);
sumaDosNumeros = (10*5+sumaDosNumeros);
console.log(sumaDosNumeros);

sumaDosNumeros = (2+2);
console.log("operacion aritmetica normal1 su valor es "+sumaDosNumeros);
sumaDosNumeros = (10*5+2);
console.log("operacion aritmetica normal2 su valor es "+sumaDosNumeros);
sumaD0sNumeros = sumaDosNumeros;
sumaDosNumeros = (10*5+sumaDosNumeros);
console.log(sumaD0sNumeros+" cambiando este valor a: "+(10*5+sumaDosNumeros)+
' en donde se incrementa su valor con el ultimo valor de la variable "sumaDosNumeros" almacedas');