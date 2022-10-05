let cantCompraDolares = 0
let cantVentaDolares = 0

alert("Bienvenido al aplicativo para adquirir moneda extranjera...")

// fgdfd
let nombre = prompt("Ingresa tu nombre ")
let apellido = prompt("Ingresa tu apellido")

// kfdsf
let cbuPesos = prompt("Ingresa el CBU de tu cuenta en pesos")
let cbuDolares = prompt("Ingresa el CBU de tu cuenta en dólares")

// hgbk
let valueOficialCompra = Number(146)
let valueOficialVenta = Number(154)


alert("----- Ingrese la operación a realizar -----")

let operacion = Number(prompt("1: Comprar dólares ------ 2: Vender dólares"))
let bandera = true
while (bandera){
    if (operacion === 1 || operacion === 2) {
        bandera = false
    } else {
        alert("Tenés que escribir 1 o 2, te vuelvo a preguntar, que queres hacer?")
        operacion = Number(prompt("1: Comprar dólares ------ 2: Vender dólares"))
    }
}


function precioFinalVenta(cantCompraDolares) {
    conversionPesos = cantCompraDolares * valueOficialVenta
    precioFinal = conversionPesos * 1.65
    return precioFinal
}

switch(operacion) {
    case 1:
        alert("El valor oficial es de $" + valueOficialVenta)
        cantCompraDolares = Number(prompt("¿Cuanto quiere comprar?"))
        let isValid = true
        while (isValid){
            if (cantCompraDolares <= 200) {
                precioFinal = precioFinalVenta(cantCompraDolares)
                isValid = false
                alert("El precio final de tu compra es $ " + precioFinal)
            } else {
                alert("Te pasaste, te vuelvo a preguntar")
                cantCompraDolares = Number(prompt("¿Cuanto quiere comprar?"))
            }
        }
        break
    case 2:
        alert("El valor oficial de venta es de $" + valueOficialCompra)
        cantVentaDolares = Number(prompt("¿Cuanto quiere vender?"))
        precioFinal = cantVentaDolares * valueOficialCompra
        alert("El monto final de tu venta es $ " + precioFinal)
        break
    default:
        alert("No ingresaste ninguna opción")
}
