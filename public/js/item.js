//Botones + -
const add = document.querySelector('#add');
const substract = document.querySelector('#substract');
const quantity = document.querySelector('#quantity')

add.addEventListener('click',()=> quantity.value = Number(quantity.value)+1 );
substract.addEventListener('click',()=> {
    if(Number(quantity.value)>0){
        quantity.value = Number(quantity.value)-1 
    }
});

//LOCALSTORAGE
var productosCarrito;

//Verificamos que localstorage tenga el espacio en memoria, sino lo creamos
if(localStorage.getItem('productosCarrito') !== undefined){
    var productosCarritoLS = localStorage.getItem("productosCarrito");
    productosCarrito = JSON.parse(productosCarritoLS);
}  

//FUNCIONES
//boton agregar a Carrito 
const botonAgregarCarrito = document.querySelector("#agregarcarrito");
botonAgregarCarrito.addEventListener("click", agregarCarrito);
var listaNueva;

function agregarCarrito(){
    //event.preventDefault();
    const cantidadProducto = document.querySelector("#quantity");
    const productoID = Number(localStorage.getItem("productoID"));
    const producto = [{id: productoID, cantidad: Number(cantidadProducto.value)}]
    

    if(cantidadProducto.value>0){
        if(productosCarrito == null){
            productosCarrito = [{id: productoID, cantidad: Number(cantidadProducto.value)}];
            listaNueva = productosCarrito;
        } else {
            if(Array.isArray(productosCarrito)){
                if(productosCarrito.filter(elem => elem.id == productoID).length == 0){
                    productosCarrito.push({id: productoID, cantidad: Number(cantidadProducto.value)});
                    listaNueva = productosCarrito;
                } else {
                    listaNueva = productosCarrito.map(elem => {
                        if(elem.id == productoID){
                            elem.cantidad=parseInt(elem.cantidad)+parseInt(cantidadProducto.value);
                            return {...elem,cantidad: elem.cantidad}
                        } 
                        return elem;
                    });
                };  
            }
        };
        localStorage.setItem("productosCarrito",JSON.stringify(listaNueva));
    }
}


   
    /*    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    textoCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    textoCarritoComprado.classList.remove("disabled");
    */