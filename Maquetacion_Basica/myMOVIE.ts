import { Professional } from "./myPROFESSIONAL";

export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: string[];
    public nacionality: string;
    public director: string;
    public writer: string;
    public language: string;
    public plataforma: string; 
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;
    public photo: string;

    constructor(title: string, releaseYear: number, actors: string[], nacionality: string, director: string, writer: string, language: string, plataforma: string, isMCU: boolean, mainCharacterName: string, producer: string, distributor: string, genre:string, photo, string){
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
        this.distributor = distributor
        this.genre = genre;
        this.photo = photo;
    }

    public toStringMovie(): string{
        let newToStringMovie =
           `title:  ${this.title}
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
            distributor: ${this.distributor}
            genre: ${this.genre}`
        return newToStringMovie
    }

    
}