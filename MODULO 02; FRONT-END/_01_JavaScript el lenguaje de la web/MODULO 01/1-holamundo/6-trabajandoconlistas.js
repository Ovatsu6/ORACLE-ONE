console.log(`Trabajando con listas`);
//console.log('"valor anterior" = '+`'${txtCompletoNormal}'`);

const cBogota = "Bogota";
const cLima = "Lima";
const cSantiago = "Santiago";
const cBuenosAires = "Buenos Aires";

//console.log(cBogota,cBuenosAires,cLima,cSantiago);

//const ciudadesDisponibles = ["Bogota","Buenos Aires","Lima","Santiago"];
const ciudadesDisponibles = new Array();//creando un arrreglo vacio
ciudadesDisponibles.push("Bogota");//enviando valores al arreglo
ciudadesDisponibles.push("Lima");
ciudadesDisponibles.push("Santiago");
ciudadesDisponibles.push("Buenos Aires");

console.log(ciudadesDisponibles);

const ciudadesMasVendidas = [];
//console.log(ciudadesMasVendidas);

ciudadesMasVendidas.push(ciudadesDisponibles);
ciudadesMasVendidas.push("Medellin");
ciudadesDisponibles.push("Sao paulo");
console.log(ciudadesMasVendidas);

console.log(ciudadesDisponibles[0]);
console.log(ciudadesMasVendidas[1]);
console.log('"valor actual03" = '+`'${ciudadesMasVendidas.slice(1)}'`);

const cantidadCiudades = ciudadesDisponibles.length;
console.log('"tenemos" '+`'${cantidadCiudades}'ciudades registradas`);

ciudadesDisponibles.splice(0,3);
console.log(ciudadesDisponibles);

//ciudadesMasVendidas.splice(0,1);
//console.log(ciudadesMasVendidas);