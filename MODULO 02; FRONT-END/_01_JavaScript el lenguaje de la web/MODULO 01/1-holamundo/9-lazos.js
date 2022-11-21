console.log(`\n Trabajando con lazos`);

const ciudadesDisponibles = new Array();//creando un arrreglo vacio
ciudadesDisponibles.push("Bogota");//enviando valores al arreglo//posicion [0]
ciudadesDisponibles.push("Lima");//posicion [1]
ciudadesDisponibles.push("Santiago");//posicion [2]
ciudadesDisponibles.push("Buenos Aires");//posicion [3]
//console.log(ciudadesDisponibles);

const edadComprador = 15;
const estaAcompanhado = false;
let tienePasaje = "con pasaje";//se puede sustituir por true pero lo deje con ese 
//valor de cadena para que imprimiera ese mensaje
//const tienePasaje = "sin pasaje";
const ciudadDestino = "Bogota";
let posicion = 0;
let destinoDisponible = false;//valor de entrada false para validar en el ciclo, que el valor se encuentra y cambie a true

console.log(ciudadesDisponibles);

puedeComprar = (edadComprador>=18||estaAcompanhado);
/*
if (edadComprador >= 18 || estaAcompanhado == true) {
    //aqui se ejecuta el codigo si la edad del comprador es igual o mayor a 18
    console.log(`\nEl comprador tiene '${edadComprador} años' de edad y su estado de acompañado es ${estaAcompanhado}`);
    console.log(`Las ciudades disponibles para viajar son: '${ciudadesDisponibles}\n`);

}
else {
    console.log(`\nel comprador tiene '${edadComprador} años' y no esta acompañado`);
    console.log(`no es posible ofrecer viajes\n`);
}
*/
/*
while (posicion < ciudadesDisponibles.length) {//(posicion < 4)

    if (ciudadesDisponibles[posicion] == ciudadDestino) {
        console.log(`destino disponible\n`);
    }
    else {
        console.log(`destino no disponible\n`);
    }
    posicion++;
}
*/
//Lazo while
/*
while (posicion < ciudadesDisponibles.length) {//(posicion < 4)

    if (ciudadesDisponibles[posicion] == ciudadDestino) {
    //cuando entra en el ciclo y encuentra coincidencia asigna el valor de true a "ciudadesDisponibles"
        destinoDisponible = true;
        break;        
    }
    posicion++;
}
*/


//Lazo for
for (let posicion = 0; posicion < ciudadesDisponibles.length; posicion++) {
    if (ciudadesDisponibles[posicion] == ciudadDestino) {
        //cuando entra en el ciclo y encuentra coincidencia asigna el valor de true a "ciudadesDisponibles"
        destinoDisponible = true;
        break;
    }
    posicion++;

}
//cuando no hay coincidencias en el ciclo mantiene el valor de false a "ciudadesDisponibles"

if (puedeComprar && destinoDisponible) {    
    console.log(`Es posible vender el pasaje, la persona puede comprar y el destino esta disponible ` + destinoDisponible);    
}
else if (puedeComprar) {    
    console.log(`No es posible vender el pasaje, la persona puede comprar pero el destino no esta disponible ` + destinoDisponible);    
}
else {    
    console.log(`No es posible vender el pasaje ` + destinoDisponible);    
}