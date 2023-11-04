
const carritos = [];

document.querySelectorAll(`.btn`).forEach((boton) => 
boton.addEventListener("click", (event) =>{
    const prenda = event.target.closest(".card-body");
console.log(event.target);
    const nombre = card-body.dataset.nombre;
    const precio = parseFloat(card-body.dataset.precio);
    
    carritos.push({nombre, precio});

    actualizarCarrito();
})); 

function actualizarCarrito(){
    const carritoElement = document.getElementById("carritos");
        let total = 0;
        let carritoHtml = `<ul>`;

    carritos.forEach((prenda) => {
        carritoHtml += `"<li>${prenda.nombre}: $${prenda.precio}</li>`;
            total += prenda.precio;
    });
    carritoHtml += `</ul> ${total}`;

    carritoElement.innerHTML = carritoHtml;
}








