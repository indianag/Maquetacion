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
        const nombre = document.getElementById("name");
        const edad = document.getElementById("age");
        const peso = document.getElementById("weight");
        const altura = document.getElementById("height");
        const retired = document.getElementById("isRetired");
        const nacionalidad = document.getElementById("nationality");
        const oscares = document.getElementById("oscarsNumber");
        const profesion = document.getElementById("profession");

        const mostrarBtn = document.getElementById("añadirInfo")
        const infoMostrada = document.getElementById("informacion");
       

        mostrarBtn.addEventListener("click", () => {
            const info1 = nombre.value;
            const info2 = edad.value;
            const info3 = peso.value;
            const info4 = altura.value;
            const info5 = retired.value;
            const info6 = nacionalidad.value;
            const info7 = oscares.value;
            const info8 = profesion.value;
     
            const informacionMostrada = `Nombre: ${info1},
            Edad: ${info2},
            Peso: ${info3},
            Altura: ${info4},
            Esta retirado: ${info5},
            Nacionalidad: ${info6},
            Numero de Oscares: ${info7},
            Profesion: ${info8}`

            informacion.textContent = informacionMostrada;
            

            title.value = "";
            releaseYear.value = "";
            actors.value = "";
            nacionality.value = "";
            director.value = "";
            writer.value = "";
            language.value = "";
            plataforma.value = "";
            isMCU.value = "";
            mainCharacterName.value = "";
            producer.value = "";
            distribuidor.value = "";
            genre.value = "";
        })

const inputURL = document.getElementById("photo2");
const mostrarBoton = document.getElementById("mostrarFoto");
const imagenMostrada = document.getElementById("imagen1");
const imagenes = [];

mostrarBoton.addEventListener("click", () => {
    const imagenUrl = inputURL.value;

    imagenes.push(imagenUrl);

    if (imagenes.length > 0){
        imagenMostrada.src = imagenes[0];
    }

    inputURL.value = "";

});


