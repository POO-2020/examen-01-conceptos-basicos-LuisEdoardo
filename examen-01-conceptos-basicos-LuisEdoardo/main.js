import Cantidad from "./cantidad.js"
class Main{
    probarCantidad(){
        console.log('<----------------------Cantidad------------------------->')
        let valor = 127
        let unidad = 'Gramos'
        let cantidad = new Cantidad(valor, unidad)
        console.log(`${cantidad.getDescripcionC()}`)

    }

}
let app = new Main
app.probarCantidad()
