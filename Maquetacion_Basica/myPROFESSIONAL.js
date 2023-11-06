export class Professional {
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
