


const linksProductos = document.querySelectorAll(".card-item__link");

//var productoID;


linksProductos.forEach(linkProducto => {
    linkProducto.addEventListener("click", function handleClick(event){
        localStorage.setItem("productoID",linkProducto.id);
    });
})


/*
linkProducto.addEventListener("click", function handleClick(event){
    alert(linkProducto.id)
});*/