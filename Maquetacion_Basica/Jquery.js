let pantalonSuelto = {tipo: "Pantalon suelto gris", precio: 20}
let vestidoTunico = {tipo: "Vestido Túnico", precio: 18}
let faldaMid = {tipo: "Falda Mid Print", precio: 12}
let cardigaLargo = {tipo: "Cardigan Largo Rayas", precio: 22}
let faldaMini = {tipo: "Falda Mini Zebra", precio: 12}
let mono = {tipo: "Mono Overol", precio: 15}
let VestidoJersey = {tipo: "Vestido Jersey", precio: 30}
let pantalonAncho = {tipo: "Pantalon Ancho", precio: 10}

let carrito = [];

jQuery(() => {
    $("#añadir1").on("click",() =>{
        carrito.push(pantalonSuelto);
        actualizarCarrito();
         
    })
    $("#añadir2").on("click",() =>{
        carrito.push(vestidoTunico);
        actualizarCarrito();
    })
    $("#añadir3").on("click",() =>{
        carrito.push(faldaMid);
        actualizarCarrito();
    })
    $("#añadir4").on("click",() =>{
        carrito.push(cardigaLargo);
        actualizarCarrito();
    })
    $("#añadir5").on("click",() =>{
        carrito.push(faldaMini);
        actualizarCarrito();
    })
    $("#añadir6").on("click",() =>{
        carrito.push(mono);
        actualizarCarrito();
    })
    $("#añadir7").on("click",() =>{
        carrito.push(VestidoJersey);
        actualizarCarrito();
    })
    $("#añadir8").on("click",() =>{
        carrito.push(pantalonAncho);
        actualizarCarrito();
    })
    

})

function actualizarCarrito(){
    $("#lista-compras").empty();
    console.log(carrito)
    let total = 0;

    carrito.forEach(function(item) {
        const card = `<li>PRENDA: ${item.tipo} - $${item.precio}</li>`;
       $("#lista-compras").append(card);
        total += item.precio;
    });
    $(".modal-footer").text("TOTAL DE COMPRAS:  $" + total);
};
