let valorMatricula= 7000000

alert(" el valor base de la matricula es de $7.000.000 ")
alert(" opciones de pago ")

const opcionesTexto= "elige una opcion(1: pago completo, 2: pago a dos cuotas 3: pago a tres cuotas)";
const opcionSeleccionada = parseInt(prompt(opcionesTexto));

let p_Completo = valorMatricula*0.95
let intereses = valorMatricula*0.02

let valorTotalIntereses=valorMatricula+intereses
let p_doscuotas=valorTotalIntereses/2;
let p_trescuotas=valorTotalIntereses/3;

switch (opcionSeleccionada) {
    case 1:
        console.log(p_Completo, "total a pagar");
        break;
    case 2:
        alert("el pago a cuotas tiene un interes del 2% ya aplicado al total")
        console.log(p_doscuotas+intereses, "total a pagar")
        break;
    case 3: alert("el pago a cuotas tiene un interes del 2% ya aplicado al total")

        console.log(p_trescuotas+intereses, "total a pagar")
        break;
    default:
        console.log("opcion no valida. Debe de ingresar una opcion entre 1 y 3.")
        break;
}
