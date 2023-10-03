import tablaProducto from "../components/productos.js";

class BotonBuscar {

    static buscarProducto(nombre) {
        return tablaProducto.productos.find(p => p.nombre === nombre);
    }

    buscarProducto(){
        let busqueda = document.getElementById("busqueda").value;
	    let producto = this.buscarProducto(busqueda);
	    if (producto) {
            document.getElementById("nombre").value = producto.nombre;
            document.getElementById("categoria").value = producto.categoria;
            document.getElementById("presentacion").value = producto.presentacion;
            document.getElementById("descripcion").value = producto.descripcion;
            document.getElementById("precio").value = producto.precio;
            document.getElementById("moneda").value = producto.moneda;
            document.getElementById("cantidad").value = producto.cantidad;
	    } else {
	        alert("Producto no encontrado");
	    }
    }
}

const accionBotonBuscar = new BotonBuscar();
export default accionBotonBuscar;