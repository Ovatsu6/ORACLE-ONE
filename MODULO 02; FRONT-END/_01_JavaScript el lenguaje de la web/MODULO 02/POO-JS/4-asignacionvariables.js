console.log("Asignando valores a las variables");

let miNombre = "Gucci";//cambiando "const" por "let"; porque en "miNombre = miNombre +" "+ miApellido;"
//da error por el tipo de dato, es necesario cambiarlo a un valor que permita la variabilidad de la variable
const MiNombre = "6ucci";
let miApellido = "Ramos";
const MiApellido = "Ramo5";
console.log(miNombre+" "+miApellido+" F01");

miNombre = miNombre+" "+miApellido+" F02";
console.log(miNombre);

const nombreCompleto = MiNombre +" "+ MiApellido+" F03";//creando una nueva variable "const" que almacene la cadena de valores
console.log(nombreCompleto);

const txtCompleto = `mi nombre es ${MiNombre} ${MiApellido}  F04`;//creando una nueva variable "const" que almacene la cadena de valores
//y con comillas simples invertidas podemos declarar dentro de la cadena//creando una plantilla de texto
console.log(txtCompleto);

const dobleTxtCompleto = '"mi nombre es ${MiNombre} ${MiApellido}  F04"';//creando una nueva variable "const" que almacene la cadena de valores
//y con comillas simples invertidas podemos declarar dentro de la cadena//creando una plantilla de texto
console.log(dobleTxtCompleto);

let txtCompletoNormal = "Cualquier txt";//creando una nueva variable "const" que almacene la cadena de valores
//y con comillas dobles
console.log('"valor anterior" = '+`'${txtCompletoNormal}'`);

txtCompletoNormal = 10;//asignando un tipo de dato diferente al inicial; es decir venia de ser "string" y ahora
//le estoy asignando un valor numerico, esto en otros lenguafes no se puede hacer de forma implicita
console.log('"valor actual01" = '+`'${txtCompletoNormal}'`);

txtCompletoNormal = 10.5;//asignando un tipo de dato diferente al inicial; es decir venia de ser "int" y ahora
//le estoy asignando un valor decimal, esto en otros lenguafes no se puede hacer de forma implicita
console.log("'valor actual02' = "+`"${txtCompletoNormal}"`);

txtCompletoNormal = true;//asignando un tipo de dato diferente al inicial; es decir venia de ser "float" o "double" 
//y ahora le estoy asignando un valor logico, esto en otros lenguafes no se puede hacer de forma implicita
console.log('"valor actual03" = '+`'${txtCompletoNormal}'`);