//EJERCICIO 2 MAYAS Y AZTECAS


class Warrior {
    constructor(name, life, power) {
        this.name = name;
        this.life = life;
        this.power = power;
    }

    attack(target) {
        console.log(`${this.name} ataca a ${target.name}`);
        target.defend(this.power);
    }

    defend(damage) {
        this.life -= damage;
        console.log(`${this.name}: Vida restante: ${this.life}`);
    }
}

class Maya extends Warrior {
    constructor(life, power) {
        super("Maya", life, power);
    }

    drinkColaCao() {
        this.power += 10;
    }
}

class Aztec extends Warrior {
    constructor(life, power) {
        super("Aztec", life, power);
    }

    drinkNesquik() {
        this.life += 10;
    }
}

//crear nuevos guerreros
let newMaya = new Maya(300, 50);
let newAztec = new Aztec(200, 20);

// Intercambio de golpes
newAztec.drinkNesquik();
newMaya.drinkColaCao();
newMaya.attack(newAztec);
newAztec.attack(newMaya);















