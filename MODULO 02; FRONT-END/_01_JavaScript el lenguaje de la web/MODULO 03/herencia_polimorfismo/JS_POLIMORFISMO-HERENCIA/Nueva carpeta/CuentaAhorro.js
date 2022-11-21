import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {//extends significa que herede todo de la calse "cuenta"
    
    constructor(cliente, numero, agencia, saldo) {
        super(cliente,numero,agencia, saldo);
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,2);//heredandp el "valor" de la clase cuenta del metodo "retirarDeCuenta"
    }
}