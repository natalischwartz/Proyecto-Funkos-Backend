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
//Verificamos que localstorage tenga el espacio en memoria, sino lo creamos
if(localStorage.getItem('productosCarrito') == null){
    localStorage.setItem("productosCarrito",0); //JSON.stringify([{id:1,cant:2}])
}  else{
    var productosCarritoLS = localStorage.getItem("productosCarrito");
    var productosCarrito = JSON.parse(productosCarritoLS);
    //console.log(productosCarrito);
}



//FUNCIONES
//boton agregar a Carrito 
const botonAgregarCarrito = document.querySelector("#agregarcarrito");
botonAgregarCarrito.addEventListener("click", agregarCarrito);
function agregarCarrito(){
    const cantidadProducto = document.querySelector("#quantity");
    const productoID = document.querySelector("#productoID");
   
    var listaNueva;



    if(productosCarrito == 0){
        productosCarrito = [{id: productoID.id, cantidad: cantidadProducto.value}]
        listaNueva = productosCarrito[0];
        alert("Hola");
        alert(productosCarrito[0].cantidad);
    } else {
        listaNueva = productosCarrito;
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