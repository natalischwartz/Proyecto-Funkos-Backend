// si hay ago dentro del carrito queremos que el mensaje de "tu carrito esta vacio" desaparezca
//traemos la info del local storage

//alert("Sidebar si existe en localStorage!!");




//Variables
//const productosEnCarrito = JSON.parse(localStorage.getItem("productoscarrito"));
const productID = 1


//LOCALSTORAGE
var productosCarrito = [0];

//Verificamos que localstorage tenga el espacio en memoria, sino lo creamos
if(localStorage.getItem('productosCarrito') !== undefined){
  const productosCarritoLS = localStorage.getItem("productosCarrito");
  productosCarrito = JSON.parse(productosCarritoLS);
}  

//cantidad de items
var items = [1,2,3,4]

const contenedorCarritoProductos = document.querySelector("#contenedor-carrito");

function cargarProductosCarrito(){
    //contenedorCarritoProductos.innerHTML="";
    productosCarrito.forEach(elem => {
        const section = document.createElement("section");
        //contenedorCarritoProductos.classList.remove("disabled");
        section.classList.add("section-product-cart");
        section.innerHTML=`
        <article class="cart-product-details">
        <div class="div-flex-row">
          <div>
            <img class="cart-image" src="../../img/star-wars/baby-yoda-1.webp" alt="">
          </div>
          <div class="cart-item">
            <h3 class="product-name">BABY YODA BLUEBALL</h3>
            <small class="product-license">STAR WARS</small>
            <small class="product-price">precio: $ 1799,99</small>
          </div>
        </div>
        <article class="div-container">
          <div class="div-flex-row">
            <input class="item__input" type="numer" name="quantity${elem.id}"  id="quantity${elem.id}" size="3" placeholder=${elem.cantidad}>
            <div class="div-flex-column">
              <button class="item__quantity" type="button" id="add">+</button>
              <button class="item__quantity" type="button" id="substract">-</button>
            </div>
          </div>
        </article>
        <article class="total">
          <h4>$ 3599,98</h4>
        </article>
        <article >
          <a href="">
            <iconify-icon class="eliminar" icon="carbon:close-outline"></iconify-icon>
          </a>
          
        </article>
      </article>
        `;
        contenedorCarritoProductos.append(section);
    });
    
}
cargarProductosCarrito();

//Funciones
/*
const textoCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const textoCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
console.log(botonesEliminar);
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
console.log(contenedorTotal);
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito() {
    if(productosEnCarrito && productosEnCarrito.length > 0 ){//si hay productos en carrito hacer algo en particular 
        textoCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        textoCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        //que los productos agregados se muestren en el contenedorCarritoProductos
        productosEnCarrito.forEach(productoEnCarrito => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML= `
                <img class="carrito-producto-imagen" src="${productoEnCarrito.imagen}" alt="${productoEnCarrito.titulo}">
                <div class="carrito-producto-titulo">
                    <small class="mx-auto">Título</small>
                    <h3 class="text-center">${productoEnCarrito.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small class="mx-auto">Cantidad</small>
                    <p class="text-center">${productoEnCarrito.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small class="mx-auto" >Precio</small>
                    <p class="text-center">${productoEnCarrito.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small class="mx-auto">Subtotal</small>
                    <p class="text-center">${productoEnCarrito.cantidad * productoEnCarrito.precio}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${productoEnCarrito.id}">
                    <i class="bi bi-trash3-fill"></i>
                </button>  
        `;
    
        contenedorCarritoProductos.append(div);

        
    
        });
    
    }else{
        //asi va acargar la pagina de carrito siempre. Me aseguro que siempre pase esto 
    
        textoCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        textoCarritoComprado.classList.add("disabled");
    }
    
    actualizarBotonesEliminar();
    actualizarTotal();
    
}
cargarProductosCarrito(); //queremos que se ejecute cuando carga la pagina y tambien que se ejecute cuando eliminamos un producto y se vuelvan a mostrar los productos nuevos del array y se refleje visualmente en la pagina de carrito

function actualizarBotonesEliminar () {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)});
    
}

function eliminarDelCarrito(e){
    
    const idBoton = e.currentTarget.id
    console.log(idBoton); //nos trae el id de ese producto

    //cuando hago click en el boton eliminar quiero que pasen varias cosas 
    //necesito que busque  cual es el producto en el array de productos en carrito
    
    console.log(productosEnCarrito)

    //traemos el index de ese producto , y hacemos un splice para eliminarlo del array
    const index = productosEnCarrito.findIndex(productoEnCarrito => productoEnCarrito.id ===idBoton)
    console.log(index);

    productosEnCarrito.splice(index,1)

    console.log(productosEnCarrito)

    cargarProductosCarrito();

    //que se guarde la actualizacion en el local storage

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    
}

botonVaciar.addEventListener("click", vaciarCarrito);
//boton vaciar
function vaciarCarrito(){
    productosEnCarrito.length = 0; // eliminamos todo del array 
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

// el total que se calcule cada vez que se cargan los productos en carrito 

function actualizarTotal(){

    const totalCalculado = productosEnCarrito.reduce((acc, productoEnCarrito) => acc + (productoEnCarrito.cantidad*productoEnCarrito.precio),0 );
    console.log(totalCalculado);
    
    contenedorTotal.textContent = $${totalCalculado};

    
    

}



*/