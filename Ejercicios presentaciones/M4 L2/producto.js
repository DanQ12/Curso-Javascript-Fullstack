class Producto{
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    detalle(){
        return `${this.nombre} cuesta $${this.precio} y pertenece a la categoria ${this.categoria}`
    };
}

export default Producto