import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"
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
        let costo = 100
        let valor = 1
        let unidad = 'Kilogramo'
        let ingrediente = new Ingrediente( 'Queso',new Cantidad(valor, unidad).getDescripcionC(), costo)
        console.log(`${ingrediente.getDescripcionI()}`)
    }
    probarReceta(){
        console.log('<----------------------Receta------------------------->')
        let ingrediente1 = new Ingrediente('harina',new Cantidad(100, 'gramos').getDescripcionC(), 100)
        let ingrediente2 = new Ingrediente('piña',new Cantidad(5, 'rebanadas').getDescripcionC(), 230)
        console.log(`${ingrediente1.getDescripcionI()}`)
        console.log(`${ingrediente2.getDescripcionI()}`)
        
    }

}
let app = new Main
app.probarCantidad()
app.probarIngrediente()
app.probarReceta()
