class Kdramas{
    constructor(nombre, categoria, actor){
        this.nombre=nombre
        this.categoria=categoria
        this.actor=actor
    }

    romance(){
        return console.log(`La serie ${this.nombre} con la categoria ${this.categoria} es con el actor ${this.actor}`)
    }
}

class mydemon extends Kdramas{
    romance(){
        return console.log(`La serie ${this.nombre} con la categoria ${this.categoria} es con el actor ${this.actor}`)
    }
}

class truebeauty extends Kdramas{
    romance(){
        return console.log(`La serie ${this.nombre} con la categoria ${this.categoria} es con el actor ${this.actor}`);
    }
}

class Itaewon extends Kdramas{
    romance(){
        return console.log(`La serie ${this.nombre} con la categoria ${this.categoria} es con el actor ${this.actor}`);
    }
}

let mydemon1 = new mydemon ('My Demon', 'Romance', 'Song Kang')
let truebeauty2 = new truebeauty ('True Beauty', 'Romance', 'Cha Eun Woo')
let Itaewon3 = new Itaewon ('Itaewon Class', 'Romance', ' Park Seo Joon')

mydemon1.romance()
truebeauty2.romance()
Itaewon3.romance()