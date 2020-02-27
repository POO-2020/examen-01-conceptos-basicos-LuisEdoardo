export default class Ingrediente{
    /**
     * 
     * @param {cantidad} cantidad 
     * @param {string} nombre 
     * @param {number} costo 
     */
    constructor(cantidad, nombre, costo){
        this.costo = costo
        this.cantidad = cantidad
        this.nombre = nombre
    }
    getDescripcionI(){
        return ` ${this.nombre}  ${this.cantidad} |  $${this.costo} Pesos`
    }
}