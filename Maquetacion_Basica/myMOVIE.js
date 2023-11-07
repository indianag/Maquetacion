class Movie {
    constructor(title, releaseYear, actors, nacionality, director, writer, language, plataforma, isMCU, mainCharacterName, producer, distribuidor, genre, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nacionality = nacionality;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.plataforma = plataforma;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distribuidor = distribuidor;
        this.genre = genre;
        this.photo = photo;
    }
    toStringMovie() {
        let newToStringMovie = `title:  ${this.title}
            releaseYear: ${this.releaseYear} 
            actors:  ${this.actors}
            nacionality: ${this.nacionality} 
            director:  ${this.director}
            writer:  ${this.writer}
            language: ${this.language}
            plataforma: ${this.plataforma}  
            isMCU:  ${this.isMCU}
            mainCharacterName:  ${this.mainCharacterName}
            producer:  ${this.producer}
            distribuidor: ${this.distribuidor}
            genre: ${this.genre}`;
        return newToStringMovie;
    }
};


        const title = document.getElementById("title");
        const releaseYear = document.getElementById("releaseYear");
        const actorsInput = document.getElementById("actors");
        const nacionality = document.getElementById("nacionality");
        const director = document.getElementById("director");
        const writer = document.getElementById("writer");
        const language = document.getElementById("language");
        const plataforma = document.getElementById("plataforma");
        const isMCU = document.getElementById("isMCU");
        const mainCharacterName = document.getElementById("mainCharacterName");
        const producer = document.getElementById("producer");
        const distribuidor = document.getElementById("distribuidor");
        const genre = document.getElementById("genre")
        const mostrarBoton = document.getElementById("añadirInfo")
        const infoMostrada = document.getElementById("informacion");

        mostrarBoton.addEventListener("click", () => {
            const info1 = title.value;
            const info2 = releaseYear.value;
            const info3 = actors.value;
            const info4 = nacionality.value;
            const info5 = director.value;
            const info6 = writer.value;
            const info7 = language.value;
            const info8 = plataforma.value;
            const info9 = isMCU.value;
            const info10 = mainCharacterName.value;
            const info11 = producer.value;
            const info12 = distribuidor.value;
            const info13 = genre.value;
        
            const informacionMostrada = `title: ${info1},
            releaseYear: ${info2}
            actors: ${info3}
            nacionality: ${info4}
            director: ${info5}
            writer: ${info6}
            language: ${info7}
            plataforma: ${info8}
            is MCU: ${info9}
            main Character Name: ${info10}
            producer: ${info11}
            distribuidor: ${info12}
            genre: ${info13}`

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








const inputURL = document.getElementById("photo");
const imagenMostrada = document.getElementById("fotoDePeli");
inputURL.addEventListener("change", () => {
    const imagenUrl = inputURL.value;
    imagenMostrada.src = imagenUrl;
    imagenMostrada.style.display="block";
})









// document.addEventListener('DOMContentLoade', 



// function guardarInformacion(){
    
//     const peliculas =[];
//     const movieForm = document.getElementById("movieConta");

//         const title = document.getElementById("title").value;
//         const releaseYear = document.getElementById("releaseYear").value;
//         const actorsInput = document.getElementById("actors").value;
//         const nacionality = document.getElementById("nacionality").value;
//         const director = document.getElementById("director").value;
//         const writer = document.getElementById("writer").value;
//         const language = document.getElementById("language").value;
//         const plataforma = document.getElementById("plataforma").value;
//         const isMCU = document.getElementById("isMCU").value;
//         const mainCharacterName = document.getElementById("mainCharacterName").value;
//         const producer = document.getElementById("producer").value;
//         const distribuidor = document.getElementById("distribuidor").value;
//         const genre = document.getElementById("genre").value;
//         const photo = document.getElementById("photo").value;

//         const actors = actorsInput.split("","").map(actor=> actor.trim());

//         const newMovie = new Movie(title, releaseYear, actors, nacionality, director, writer, language, plataforma, isMCU, mainCharacterName, producer, distribuidor, genre, photo);
        
//         peliculas.push(newMovie);

//         document.getElementById("title").value ="";
//         document.getElementById("releaseYear").value="";
//         document.getElementById("actors").value="";
//         document.getElementById("nacionality").value="";
//         document.getElementById("director").value="";
//         document.getElementById("writer").value="";
//         document.getElementById("language").value="";
//         document.getElementById("plataforma").value="";
//         document.getElementById("isMCU").value="";
//         document.getElementById("mainCharacterName").value="";
//         document.getElementById("producer").value="";
//         document.getElementById("distribuidor").value="";
//         document.getElementById("genre").value="";
//         document.getElementById("photo").value="";
//         console.log(newMovie);
// };
// document.getElementById("solicitarBtn").addEventListener("click",guardarInformacion);    


//         // movieForm.addEventListener('solicitarBtn', function(e){
//         //     e.preventDefault();
//         // })
//         // movieForm.reset();


// function mostrarPelicula(){

//     const newMovie = new Movie(title, releaseYear, actors, nacionality, director, writer, language, plataforma, isMCU, mainCharacterName, producer, distribuidor, genre, photo);
//         const movieList = document.getElementById(`movie-lista`);
//         const movieItem = document.createElement(`li`);
//         movieItem.innerHTML = `<h1> ${newMovie.title}</h1>
//       <p>${newMovie.releaseYear}
//         ${newMovie.actors}
//         ${newMovie.nacionality}
//         ${newMovie.director}
//         ${newMovie.writer}
//         ${newMovie.language}
//         ${newMovie.plataforma}
//         ${newMovie.isMCU}
//         ${newMovie.mainCharacterName}
//         ${newMovie.producer}
//         ${newMovie.distribuidor}
//         ${newMovie.genre}</p>
//         <img src="${newMovie.photo}" alt="poster de la pelicula">`;

//         movieList.appendChild(movieItem);
//     };
// document.getElementById("filtrarBtn").addEventListener("click", mostrarPelicula);










//     Movies.forEach(movie => {
//         const movieElement = document.createElement("div");
//         movieElement.innerHTML = newToStringMovie;
        
//         peliculasContainer.appendChild(movieElement);
//     });
//     console.log(newToStringMovie);
// })