const personas = [];

function guardarInformacion(){
    const nombre= document.getElementById("nombre").value;
    const origen= document.getElementById("origen").value;
    const destino= document.getElementById("destino").value;
    const numeroDePersonas= document.getElementById("personas").value;
    const fecha= document.getElementById("fecha").value;

    const nuevoContacto = {
        nombre: nombre,
        origen: origen,
        destino: destino,
        numeroDePersonas: numeroDePersonas,
        fecha: fecha,
    };
    personas.push(nuevoContacto);

    document.getElementById("nombre").value = "";
    document.getElementById("origen").value = "";
    document.getElementById("destino").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("fecha").value = "";
}

document.getElementById("solicitarBtn").addEventListener("click",guardarInformacion);



function filtrarDestino(){
    const destinosPermitidos = ["canarias", "mallorca", "galicia"];
    const solicitudesFiltradas = personas.filter(persona => {
        return destinosPermitidos.includes(persona.destino.toLowerCase());
    });
    console.log("solicitudes para Canarias, Mallorca o Galicia:");
    console.log(solicitudesFiltradas);
}

document.getElementById("filtrarBtn").addEventListener("click", filtrarDestino);



function filtrarDestino(){
    const solicitudesJSON = JSON.stringify(solicitudesFiltradas);

    window.location.href=`nueva_pagina.html?solicitudes=${encodeURIComponent(solicitudesJSON)}`;
}




















// document.addEventListener("DOMContentLoaded",
// function (){
//     const contact= document.getElementById("contato").value;
//     const solicitarBtn= document.getElementById("solicitarBtn");
//     const filtrarBtn= document.getElementById("filtrarBtn");
//     const resul= document.getElementById("resultados");

//     solicitarBtn.addEventListener("click",
//     function(){
//         resul.textContent="Solicitud de informacion enviada.";
//     });
//     filtrarBtn.addEventListener("click",
//     function(){
//         resul.textContent="Resultados filtrados.";
//     });
// });