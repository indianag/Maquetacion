 class Professional {
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired; 
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
    toString() {
        let newTostring = `Name:   ${this.name}  
            Age:   ${this.age}  
            Weight:   ${this.weight}  
            Height:  ${this.height}
            IsRetired:   ${this.isRetired}  
            Nationality:   ${this.nationality}  
            OscarNumber:  ${this.oscarsNumber}
            Profession:   ${this.profession}`;
        return newTostring;
    }
}

const urlInput = document.getElementById("photo2");
const mostrarBoton = document.getElementById("mostrarFoto");
const profesional1 = document.getElementById("imagen1");
const profesional2 = document.getElementById("imagen2");
const profesional3 = document.getElementById("imagen3");
let alternarImagen = false;

mostrarBoton.addEventListener("click", () => {
    const imagenUrl = urlInput.value;

    if(alternarImagen){

    
    profesional1.src = imagenUrl;
    profesional2.src = "";
    } else {
        profesional2.src = imagenUrl;
        profesional1.src = "";
    }
    alternarImagen = !alternarImagen;
    
    urlInput.value = "";
});





























// const urlInput = document.getElementById("photo2");
// const mostrarBoton = document.getElementById("mostrarFoto");
// const profesional1 = document.getElementById("imagen1");
// const profesional2 = document.getElementById("imagen2");
// const profesional3 = document.getElementById("imagen3");


// mostrarBoton.addEventListener("click", () => {
//     const urls = urlInput.value.split ("","").map(url => url.trim());


//     if(urls.length >=2){
//         profesional1.src = urls[0];
//         profesional2.src = urls[1];
      
//     } else {
//         alert("Ingresa al menos dos URLs separadas por comas.");
//     }

//     urlInput.value = "";
// });














































// const urlInput = document.getElementById("photo2");
// const mostrarBoton = document.getElementById("mostrarFoto");
// const profesional1 = document.getElementById("imagen1");
// const profesional2 = document.getElementById("imagen2");
// const profesional3 = document.getElementById("imagen3");
// let alternarImagen = false;

// mostrarBoton.addEventListener("click", () => {
//     const imagenUrl = urlInput.value;

//     if(alternarImagen){

    
//     profesional1.src = imagenUrl;
//     profesional2.src = "";
//     } else {
//         profesional2.src = imagenUrl;
//         profesional1.src = "";
//     }
//     alternarImagen = !alternarImagen;
    
//     urlInput.value = "";
// });
// const nuevaImagen = document.createElement("img");
// nuevaImagen.src = imagenUrl;

// imagenesContainer.appendChild(nuevaImagen);




// function insertarImagen(){
//     let url = document.getElementById("photo2").value
//     document.getElementById("profesional1").src =url
//     document.getElementById("info1").style.display="block"
// }

// // function insertarImagen(){
// //     let url =$("#profesional1").attr("src",url).show(1000)
// // }


