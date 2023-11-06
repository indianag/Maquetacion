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

// document.addEventListener('DOMContentLoade', 



function guardarInformacion(){
    
    const peliculas =[];
    const movieForm = document.getElementById('movieConta');

        const title = document.getElementById("title").value;
        const releaseYear = document.getElementById("releaseYear").value;
        const actors = document.getElementById("actors").value;
        const nacionality = document.getElementById("nacionality").value;
        const director = document.getElementById("director").value;
        const writer = document.getElementById("writer").value;
        const language = document.getElementById("language").value;
        const plataforma = document.getElementById("plataforma").value;
        const isMCU = document.getElementById("isMCU").value;
        const mainCharacterName = document.getElementById("mainCharacterName").value;
        const producer = document.getElementById("producer").value;
        const distribuidor = document.getElementById("distribuidor").value;
        const genre = document.getElementById("genre").value;
        const photo = document.getElementById("photo").value;


        const newMovie = new Movie(title, releaseYear, actors, nacionality, director, writer, language, plataforma, isMCU, mainCharacterName, producer, distribuidor, genre, photo);
        
        peliculas.push(newMovie);

        document.getElementById("title").value ="";
        document.getElementById("releaseYear").value="";
        document.getElementById("actors").value="";
        document.getElementById("nacionality").value="";
        document.getElementById("director").value="";
        document.getElementById("writer").value="";
        document.getElementById("language").value="";
        document.getElementById("plataforma").value="";
        document.getElementById("isMCU").value="";
        document.getElementById("mainCharacterName").value="";
        document.getElementById("producer").value="";
        document.getElementById("distribuidor").value="";
        document.getElementById("genre").value="";
        document.getElementById("photo").value="";
};
document.getElementById("solicitarBtn").addEventListener("click",guardarInformacion);    


        // movieForm.addEventListener('solicitarBtn', function(e){
        //     e.preventDefault();
        // })
        // movieForm.reset();


function mostrarPelicula(){

    const newMovie = new Movie(title, releaseYear, [], nacionality, director, writer, language, plataforma, isMCU, mainCharacterName, producer, distribuidor, genre, photo);
        const movieList = document.getElementById('movie-lista');
        const movieItem = document.createElement('li');
        movieItem.innerHTML = `<h1> ${newMovie.title}</h1>
      <p>${newMovie.releaseYear}
        ${newMovie.actors.join(',')}
        ${newMovie.nacionality}
        ${newMovie.director}
        ${newMovie.writer}
        ${newMovie.language}
        ${newMovie.plataforma}
        ${newMovie.isMCU}
        ${newMovie.mainCharacterName}
        ${newMovie.producer}
        ${newMovie.distribuidor}
        ${newMovie.genre}</p>
        <img src="${newMovie.photo}" alt="poster de la pelicula">
        `;

        movieList.appendChild(movieItem);
    };
document.getElementById("filtrarBtn").addEventListener("click", mostrarPelicula);










//     Movies.forEach(movie => {
//         const movieElement = document.createElement("div");
//         movieElement.innerHTML = newToStringMovie;
        
//         peliculasContainer.appendChild(movieElement);
//     });
//     console.log(newToStringMovie);
// })