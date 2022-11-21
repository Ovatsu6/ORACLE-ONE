import { cliente } from './5-cliente.js';
export class cuentaCorriente

//con el export indicamos que en el lugar donde importemos el codigo reciba informacion de este codigo
{
    #cliente;
    numCuenta;
    agencia;
    #saldoCuenta;//#saldoCuenta; el simbolo numeral hace privada la variable y la oculta, aun esta por aprobarse la estandarizacion
    static cantidadCuentas = 0;//una variable estatica es cuando la variable es un atributo comun para todas las instancias
    //es decir su valor no es el mismo cada vez que se ejecute el codigo sino que podria variar dependiendo la confg.
    //del cadigo; tambien podria ser "static #cantidadCuentas = 0";
    set setCliente(valor){//set asigna un valor//en este caso crea el valor y lo asignado a cliente que es privdo
        if (valor instanceof cliente)//protege de alguna alteracion voluntaria o no en los datos del cliente
        this.#cliente = valor;
    };

    get getCliente(){//get retorna un valor//en este caso retorna el valora asignado a cliente que es privdo
        return this.#cliente;
    };

    constructor(cliente,numCuenta,agencia){
        this.setCliente=cliente;//se llamada a la instancia q esta confifurada con valores privados
        this.numCuenta=numCuenta;        
        this.agencia=agencia;
        this.#saldoCuenta=0;
        cuentaCorriente.cantidadCuentas++;
    }
    depositoEnCuenta(valor){
        if(valor>0){//hace que cuando se ingrese un valor negativo no se haga operacion
        this.#saldoCuenta += valor //igual//this.#saldoCuenta = this.#saldoCuenta+valor
        return this.#saldoCuenta
        }
    }
    retirarDeCuenta(valor){
        if(valor<=this.#saldoCuenta){//valor menor o igual que el saldo de la cuenta
        this.#saldoCuenta -= valor //igual//this.#saldoCuenta = this.#saldoCuenta-valor
        return this.#saldoCuenta 
        }
    }
    verSaldo(){
        return this.#saldoCuenta
    }
    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}



