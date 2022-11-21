import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta {//extends significa que herede todo de la calse "cuenta"
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente,numero,agencia,0);
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,5);;//heredandp el "valor" de la clase cuenta del metodo "retirarDeCuenta"
    }

    prueba1() {//llamarse igual
        super.prueba1();//con "super" manda a traer todos los metodos de padre es decir de "prueba1"
        console.log('Método Hijo');
    }
}