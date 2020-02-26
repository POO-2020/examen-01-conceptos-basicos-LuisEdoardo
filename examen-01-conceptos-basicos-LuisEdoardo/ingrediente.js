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
        return `Nombre: ${this.nombre}\n Cantidad: ${this.cantidad}\n Costo: ${this.costo}`
    }
}