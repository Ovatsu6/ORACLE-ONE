console.log(`\n Trabajando con operadores encadenados`);
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
const estaAcompanhado = true;
let tienePasaje = "con pasaje";//se puede sustituir por true pero lo deje con ese 
                               //valor de cadena para que imprimiera ese mensaje
//const tienePasaje = "sin pasaje";

if (edadComprador >= 18 || estaAcompanhado==true) {
    //aqui se ejecuta el codigo si la edad del comprador es igual o mayor a 18
    console.log(`\nEl comprador tiene '${edadComprador} años' de edad y su estado de acompañado es ${estaAcompanhado}`);
    console.log(`Las ciudades disponibles para viajar son: '${ciudadesDisponibles}\n`);

}
else {
        console.log(`\nel comprador tiene '${edadComprador} años' y no esta acompañado`);
        console.log(`no es posible ofrecer viajes\n`);
    }

//proceso de embarque
console.log(`proceso de embarque \n`);
if (tienePasaje == "con pasaje"|| estaAcompanhado && edadComprador >= 18) {
    console.log(`comprador ${tienePasaje}, feliz viaje\n`);    
}
else if (tienePasaje == "sin pasaje"|| estaAcompanhado && edadComprador >= 18) {
    console.log(`comprador ${tienePasaje}, proceso de embarque pendiente\n`);
}
else
if (tienePasaje=="con pasaje" || tienePasaje=="sin pasaje" && edadComprador<18) {
    tienePasaje="sin pasaje";
    console.log(`comprador ${tienePasaje}, no es posible hacer embarque\n`);
}
