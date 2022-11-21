class cliente
{
    nombreCliente;
    duiCliente;
    nitCliente;

    constructor(){//corrige error de "undefined" con el problema de variables tipo cadena, numerico etc.
        //corrige los posibles fallos que podria tener el codigo en la ejecuccion
        //con lo minimo necesario para que este no de error
        this.nombreCliente='';
        this.duiCliente='';
        this.nitCliente='';
    }
}

class cuentaCorriente
{
    numCuenta;
    saldoCuenta;//#saldoCuenta; el simbolo numeral hace privada la variable y la oculta, aun esta por aprobarse la estandarizacion
    agencia

    constructor(){//corrige error de "undefined" con el problema de saldo al asignarle valor inicial
        //corrige los posibles fallos que podria tener el codigo en la ejecuccion
        //con lo minimo necesario para que este no de error
        this.numCuenta='';
        this.saldoCuenta=0;
        this.agencia=''
    }
    depositoEnCuenta(valor){
        if(valor>0){//hace que cuando se ingrese un valor negativo no se haga operacion
        this.saldoCuenta += valor //igual//this.saldoCuenta = this.saldoCuenta+valor
        }
    }
    retirarEnCuenta(valor){
        if(valor<=this.saldoCuenta){//valor menor o igual que el saldo de la cuenta
        this.saldoCuenta -= valor //igual//this.saldoCuenta = this.saldoCuenta-valor
        }
    }
}

const cliente1 = new cliente();

cliente1.nombreCliente="Luis"

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numCuenta="87654321"
cuentaCorriente1.saldoCuenta=2000;
cuentaCorriente1.agencia="Taca"

const cliente2 = new cliente();

cliente2.nombreCliente="Raul"
cliente2.duiCliente="12345678-9"
cliente2.nitCliente="9876543-1"

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numCuenta="87654321"
cuentaCorriente2.saldoCuenta=1000;
cuentaCorriente2.agencia="American Airline"


console.log(cliente1);
console.log(cuentaCorriente1);
cuentaCorriente1.depositoEnCuenta(1234);
console.log(cuentaCorriente1);
cuentaCorriente1.retirarEnCuenta(3210);
console.log(cuentaCorriente1);
cuentaCorriente1.depositoEnCuenta(-200);//no se debe ingresar valor negativo en deposito
console.log(cuentaCorriente1);
cuentaCorriente1.retirarEnCuenta(3000);//no se debe retirar un valor mayor al saldo de la cuenta
console.log(cuentaCorriente1);

//console.log(cuentaCorriente2);
//console.log(cuentaCorriente2.saldoCuenta);
//cuentaCorriente2.depositoEnCuenta(200)
//console.log(cuentaCorriente2.saldoCuenta);
//cuentaCorriente2.depositoEnCuenta(100)
//console.log(cuentaCorriente2.saldoCuenta);