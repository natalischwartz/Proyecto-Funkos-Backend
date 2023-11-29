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
var productosCarrito = [0];

//Verificamos que localstorage tenga el espacio en memoria, sino lo creamos
if(localStorage.getItem('productosCarrito') !== undefined){
    var productosCarritoLS = localStorage.getItem("productosCarrito");
    productosCarrito = JSON.parse(productosCarritoLS);
}  

//FUNCIONES
//boton agregar a Carrito 
const botonAgregarCarrito = document.querySelector("#agregarcarrito");
botonAgregarCarrito.addEventListener("click", agregarCarrito);

function agregarCarrito(){
    const cantidadProducto = document.querySelector("#quantity");
    const productoID = document.querySelector("#productoID");
    var listaNueva;

    if(productosCarrito == null){
        productosCarrito = [{id: productoID.id, cantidad: cantidadProducto.value}]
        listaNueva = productosCarrito[0];
    } else {
        if(productosCarrito.filter(elem => elem.id == productoID.id).length == 0){
            listaNueva = productosCarrito.push([{id: productoID.id, cantidad: cantidadProducto.value}])
        } else {
            listaNueva = productosCarrito.map(elem => {
                if(elem.id == productoID.id){
                    elem.cantidad=parseInt(elem.cantidad)+parseInt(cantidadProducto.value);
                    return {...elem,cantidad: elem.cantidad}
                } 
                return elem
            })
        }
        
    };

    localStorage.setItem("productosCarrito",JSON.stringify(listaNueva));
    
    

}









    
   
    /*    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    textoCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    textoCarritoComprado.classList.remove("disabled");
    */