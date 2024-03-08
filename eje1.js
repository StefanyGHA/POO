class Actor{
    constructor(nombre){
        this.nombre=nombre
    }
    personaje(){
        return console.log( `${this.nombre} Actuó en Sweet Home`)
    }
}

class Actor1 extends Actor{
    personaje(){
        return console.log(`${this.nombre} Actuó en Love Alarm`)
    }
}

class Actor2 extends Actor{
    personaje(){
        return console.log(`${this.nombre} Actuó en Navillera`)
    }
}

let song = new Actor1('Song')
let kang = new Actor2('Kang')
song.personaje()
kang.personaje()