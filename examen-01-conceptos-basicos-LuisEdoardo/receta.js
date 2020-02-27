export default class Receta{
    constructor(autor, nombre, ingredientes){
        this.autor = autor
        this.nombre = nombre
        this.ingredientes = ingredientes
    }
    getNumeroDeIngredientes(){
        this.ingredientes.forEach((ingredientes, i) => {
            console.log(`${i+1} ${ingredientes}`)
        })
    }
    agregarIngredientes(ingrediente){
        this.ingredientes.push(ingrediente)
    }
    getCosto(){
        let total = 0
        this.ingredientes.forEach((ingrediente, i) => {
            total = (total + ingrediente)
        })

    }
    imprimirEnConsola(){
        return `${this.nombre} ${this.autor}`
    }
}