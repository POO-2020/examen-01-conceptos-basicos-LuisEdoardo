import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
class Main{
    probarCantidad(){
        console.log('<----------------------Cantidad------------------------->')
        let valor = 127
        let unidad = 'Gramos'
        let cantidad = new Cantidad(valor, unidad)
        console.log(`${cantidad.getDescripcionC()}`)

    }
    probarIngrediente(){
        console.log('<----------------------Ingrediente------------------------->')
        let costo = '$100'
        let valor = 1
        let unidad = 'Kilogramo'
        let ingrediente = new Ingrediente( new Cantidad(valor, unidad).getDescripcionC(), 'Queso', costo)
        console.log(`${ingrediente.getDescripcionI()}`)
    }

}
let app = new Main
app.probarCantidad()
app.probarIngrediente()
