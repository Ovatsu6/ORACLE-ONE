export class cliente
//con el export indicamos que en el lugar donde importemos el codigo reciba informacion de este codigo
{
    nombreCliente;
    duiCliente;
    nitCliente;

    constructor(nombreCliente, duiCliente, nitCliente){//corrige error de "undefined" con el problema de variables tipo cadena, numerico etc.
        //corrige los posibles fallos que podria tener el codigo en la ejecuccion
        //con lo minimo necesario para que este no de error
        this.nombreCliente=nombreCliente;
        this.duiCliente=duiCliente;
        this.nitCliente=nitCliente;
    }
}
