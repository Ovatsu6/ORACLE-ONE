console.log(`Trabajando con condiciones`);
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
//console.log(ciudadesDisponibles);

const edadComprador = 25;
const estaAcompanhado = false;

if (edadComprador >= 18) {
    //aqui se ejecuta el codigo si la edad del comprador es igual o mayor a 18
    console.log(`El comprador tiene '${edadComprador} años' es mayor de edad`);
    console.log(`Las ciudades disponibles para viajar son: '${ciudadesDisponibles}`);

}
else //{
    if (estaAcompanhado) {
        console.log(`El comprador menor de edad esta acompañado`);
        console.log(`Y tiene '${edadComprador} años'`);
        console.log(`Las ciudades disponibles para viajar son: '${ciudadesDisponibles}`);
    }
    else {
        console.log(`el comprador tiene '${edadComprador} años' y no esta acompañado`);
        console.log(`no es posible ofrecer viajes`);
    }

//}
/*
console.log(``);
console.log(`evaluando operadores`);
console.log("Mayor o Igual que = "+(edadComprador >= 18));
console.log(`Mayor que = ${edadComprador > 18}`);
console.log(`Menor o Igual que = `+(edadComprador <= 18));
console.log(`Menor que = ${edadComprador < 18}`);
console.log(`Exactamente Igual que = ${edadComprador == 18}`);
console.log(`diferente que = `);
console.log(edadComprador != 18);
console.log(``);
*/