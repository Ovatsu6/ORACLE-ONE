/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js';
import {Cuenta} from './Cuenta.js';

const cliente1 = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLuis = new CuentaCorriente(cliente1, '1', '001');
const cuentaDeAsusena = new CuentaCorriente(cliente2,'2','002');

const CuentaAhorroDeLuis = new CuentaAhorro(cliente1,"3778","001",0);

console.log(cuentaDeLuis);
console.log(CuentaAhorroDeLuis);






