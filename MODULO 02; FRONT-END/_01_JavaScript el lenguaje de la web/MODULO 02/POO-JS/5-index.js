/** Importacion de calses **/
/** ejecutar en powershell en la ruta del directoiro del archivo "npm init" **/
/** para que genere un archivo configurable de jason donde tendra varios modulos **/
import { cliente } from './5-cliente.js';
import { cuentaCorriente } from './5-cuentaCorrienteUsandoObjetos.js';

const cliente1 = new cliente("Luis","12345678-9","9876543-1");
console.log(cliente1);
//const cliente1 = new cliente();
//cliente1.nombreCliente = "Luis"
//cliente1.duiCliente="12345678-9"
//cliente1.nitCliente="9876543-1"

const cuentaDeLuis = new cuentaCorriente(cliente1,"1","001");
//cuentaDeLuis.numCuenta = "4567890-123";
//const cuentaDeLuis = new cuentaCorriente();
//cuentaDeLuis.numCuenta = "1";
//cuentaDeLuis.agencia = "001";
//cuentaDeLuis.cliente = cliente1;

const cliente2 = new cliente("Asusena","12345678-9","9876543-1");
//const cliente2 = new cliente();
//cliente2.nombreCliente = "Asusena"
//cliente2.duiCliente="12345678-9"
//cliente2.nitCliente="9876543-1"

const cuentaDeAsusena = new cuentaCorriente(cliente2,"2","002");
//const cuentaDeAsusena = new cuentaCorriente();
//cuentaDeAsusena.numCuenta = "2";
//cuentaDeAsusena.agencia = "002";
//cuentaDeAsusena.setcliente = cliente2;

console.log(`Los datos de "${cliente1.nombreCliente}" son: `);
console.log(cuentaDeLuis);

let saldo = cuentaDeLuis.verSaldo();
saldo = cuentaDeLuis.depositoEnCuenta(1234);

let parametroValor = 1210;

let saldoAsusena = cuentaDeAsusena.verSaldo();
console.log(`"El Saldo de asusena es" = $${saldoAsusena}`);//comillas especiales puede ir adentro la variable
//console.log('"El Saldo Actual es" = $'+saldoAsusena);//comillas simples o dobles solo puede ir texto plano

console.log('"El Saldo de luis es" = $'+saldo);
cuentaDeLuis.transferirParaCuenta(parametroValor,cuentaDeAsusena);
//saldoAsusena = cuentaDeAsusena.depositoEnCuenta(1234);
console.log('"El Saldo de luis es" = $'+saldo);
console.log('"El Saldo de asusena es" = $'+saldoAsusena);

if (cuentaDeAsusena.cliente) {
    console.log(cuentaDeAsusena.getcliente);
}
else{
    console.log(cuentaDeAsusena);
}
//console.log(cuentaDeAsusena.cantidadCuentas);//undefined
console.log(cuentaCorriente.cantidadCuentas);
new cuentaCorriente(cliente2,"2","002");
new cuentaCorriente(cliente2,"2","002");
new cuentaCorriente(cliente2,"2","002");
new cuentaCorriente(cliente2,"2","002");
console.log(cuentaCorriente.cantidadCuentas);
//console.log(cuentaDeAsusena.cantidadCuentas);//undefined