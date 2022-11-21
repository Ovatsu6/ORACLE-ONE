class cliente//las clases se crean cuando hay variables q podrian tener en su contendio valores variopinto
//En el caso de código repetible que haga referencia a más de un tipo de información, 
//debemos crear una clase para cada uno de los tipos.
{
    nombreCliente;
    duiCliente;
    //numCuenta;//no pertenecen a esta clase
    //saldoCuenta;//no pertenecen a esta clase
    nitCliente;
}

class cuentaCorriente
{
    numCuenta;
    saldoCuenta;
    agencia
    depositoEnCuenta(valor){
        this.saldoCuenta += valor //igual//this.saldoCuenta = this.saldoCuenta+valor
    }
}

const cliente1 = new cliente();

cliente1.nombreCliente="Luis"
cliente1.duiCliente="12345678-9"
cliente1.nitCliente="9876543-1"

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numCuenta="87654321"
cuentaCorriente1.saldoCuenta=2000
cuentaCorriente1.agencia="Taca"

const cliente2 = new cliente();

cliente2.nombreCliente="Raul"
cliente2.duiCliente="12345678-9"
cliente2.nitCliente="9876543-1"

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numCuenta="87654321"
cuentaCorriente2.saldoCuenta=1000;
cuentaCorriente2.agencia="American Airline"


//console.log(nombreCliente);
console.log(cuentaCorriente2);
console.log(cuentaCorriente2.depositoEnCuenta(200));//desde adentro de "console.log"
console.log(cuentaCorriente2);
console.log(cuentaCorriente2.depositoEnCuenta(100));
console.log(cuentaCorriente2);

//console.log(cuentaCorriente2);
//console.log(cuentaCorriente2.saldoCuenta);
//cuentaCorriente2.depositoEnCuenta(200)//desde afuera del "console.log"
//console.log(cuentaCorriente2.saldoCuenta);
//cuentaCorriente2.depositoEnCuenta(100)
//console.log(cuentaCorriente2.saldoCuenta);