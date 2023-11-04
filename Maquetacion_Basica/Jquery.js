$(document).ready(function(){
    const carrito = [];

    $(".btn").click(function() {
        const prenda = $(this).closest(".card-body");
            const nombre = prenda.find("h5").text();
            const precio = parseFloat(prenda.find(".card-precio").text().replace("precio: $",""));

            carrito.push({nombre, precio});

            actualizarCarrito();
    });

    $("#mostrar-carrito").click(function(){
        $(".modal").css("display", "block");
    });
    $(".btn-close").click(function(){
        $(".modal").css("display", "none");
    });

    function actualizarCarrito(){
        $("#lista-carrito").empty();
        let total = 0;

        carrito.forEach(prenda => {
            const item = `<li>${prenda.nombre} - $${prenda.precio}</li>`;
            $("#lista-carrito").append(item);
            total += prenda.precio;
        });
        $(".modal-footer").text("$" + total);
    };
});

































// jQuery(() => {
//     $(".btn").on("click", () => {
//         $(".card-body").prepend()
//         const prenda = $(this).closest(".card-body");
//         const nombre = prenda.find("card-title").text();
//         const precio = parseFloat(prenda.find(".card-precio").text().replace("precio: $",""));

//         const item =`<li>${nombre} - $${precio}</li>`;
//         $("#lista-carrito").append(item);
//     });
//     $(".modal-body").click(function(){
//         alert($(".modal"));
//     });
// });




















// const carritos = [];

// document.querySelectorAll(`.btn`).forEach((boton) => 
// boton.addEventListener("click", (event) =>{
//     const prenda = event.target.closest(".card-body");
//     const nombre = card-body.dataset.nombre;
//     const precio = parseFloat(card-body.dataset.precio);
    
//     carritos.push({nombre, precio});

//     actualizarCarrito();
//     console.log(actualizarCarrito
//         ())
// })); 

// function actualizarCarrito(){
//     const carritoElement = document.getElementById("carritos");
//         let total = 0;
//         let carritoHtml = `<ul>`;

//     carritos.forEach((prenda) => {
//         carritoHtml += `"<li>${prenda.nombre}: $${prenda.precio}</li>`;
//             total += prenda.precio;
//     });
//     carritoHtml += `</ul> ${total}`;

//     carritoElement.innerHTML = carritoHtml;
// }










// function guardarInformacion(){
//     const nombre= document.getElementById("nombre").value;
//     const origen= document.getElementById("origen").value;
//     const destino= document.getElementById("destino").value;
//     const numeroDePersonas= document.getElementById("numeroPersonas").value;
//     const fecha= document.getElementById("fecha").value;

//     const newCarrito = {
//         nombre: nombre,
//         origen: origen,
//         destino: destino,
//         numeroPersonas: numeroDePersonas,
//         fecha: fecha,
//     };
//     personas.push(newcarrito);

//     document.getElementById("nombre").value = "";
//     document.getElementById("origen").value = "";
//     document.getElementById("destino").value = "";
//     document.getElementById("numeroPersonas").value = "";
//     document.getElementById("fecha").value = "";
// }

// document.getElementById("solicitarBtn").addEventListener("click",guardarInformacion);

