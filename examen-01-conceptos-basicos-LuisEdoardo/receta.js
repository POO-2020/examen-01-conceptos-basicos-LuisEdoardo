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
    getCosto(){

    }
    imprimirEnConsola(){
        return ``
    }
}