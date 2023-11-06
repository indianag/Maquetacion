// const personas = [];

// function guardarInformacion(){
//     const nombre= document.getElementById("nombre").value;
//     const origen= document.getElementById("origen").value;
//     const destino= document.getElementById("destino").value;
//     const numeroDePersonas= document.getElementById("numeroPersonas").value;
//     const fecha= document.getElementById("fecha").value;

//     const nuevoContacto = {
//         nombre: nombre,
//         origen: origen,
//         destino: destino,
//         numeroPersonas: numeroDePersonas,
//         fecha: fecha,
//     };
//     personas.push(nuevoContacto);

//     document.getElementById("nombre").value = "";
//     document.getElementById("origen").value = "";
//     document.getElementById("destino").value = "";
//     document.getElementById("numeroPersonas").value = "";
//     document.getElementById("fecha").value = "";
// }

// document.getElementById("solicitarBtn").addEventListener("click",guardarInformacion);



// function filtrarDestino(){
//     const destinosPermitidos = ["canarias", "mallorca", "galicia"];
//     const solicitudesFiltradas = personas.filter(persona => {
//         return destinosPermitidos.includes(persona.destino.toLowerCase());
//     });
//     const resultados = document.getElementById("resultado");
//     resultados.innerHTML= " ";

//     solicitudesFiltradas.forEach(persona => {
//         const div = document.createElement("div");
//         const nombre = document.createElement("p");
//         nombre.textContent = persona.nombre;
//         div.appendChild(nombre);

//         const origen = document.createElement("p");
//         origen.textContent = persona.origen;
//         div.appendChild(origen);

//         const destino = document.createElement("p");
//         destino.textContent = persona.destino;
//         div.appendChild(destino);

//         const numeroPersonas = document.createElement("p");
//         numeroPersonas.textContent = persona.numeroPersonas;
//         div.appendChild(numeroPersonas);

//         const fecha = document.createElement("p");
//         fecha.textContent = persona.fecha;
//         div.appendChild(fecha);   
//         resultados.appendChild(div)
//     });
// console.log(resultados)
//     console.log("solicitudes para Canarias, Mallorca o Galicia:");
//     console.log(solicitudesFiltradas);
// }


// document.getElementById("filtrarBtn").addEventListener("click", filtrarDestino);