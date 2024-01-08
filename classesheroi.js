class Heroi {
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}

class Mago extends Heroi {
    constructor(nome,idade,tipo){
        super(nome,idade,tipo);
    }

    atacar(){
        console.log(`O ${this.nome} da classe ${this.tipo} usou magia`);
    }
}

class Guerreiro extends Heroi {
    constructor(nome,idade,tipo){
        super(nome,idade,tipo);
    }

    atacar(){
        console.log(`O ${this.nome} da classe ${this.tipo} usou espada`);
    }
}

class Monge extends Heroi {
    constructor(nome,idade,tipo){
        super(nome,idade,tipo);
    }

    atacar(){
        console.log(`O ${this.nome} da classe ${this.tipo} usou artes marciais`);
    }
}

class Ninja extends Heroi {
    constructor(nome,idade,tipo){
        super(nome,idade,tipo);
    }

    atacar(){
        console.log(`O ${this.nome} da classe ${this.tipo} usou shuriken`);
    }
}


var heroi1 = new Mago('Gabriel','20','mago')
var heroi2 = new Ninja('Marciano','25','ninja')

heroi1.atacar();
heroi2.atacar();