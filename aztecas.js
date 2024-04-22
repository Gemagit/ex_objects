//EJERCICIO 2 MAYAS Y AZTECAS


class Warrior {
    constructor(life, power) {
      this.life = life;
      this.power = power;
    }
    attack() {
      return this.power;
      }
      
    defend(damage) {
      this.life = this.life - damage;
      console.log("Vida restante:" + this.life);
    }
  }
  
  class Maya extends Warrior {
    constructor(life, power) {
      super(life, power);
    }
    drinkColaCao() {
      this.power += 10;
      console.log(`Maya tiene ${this.power} de poder`);
    }
  }
  
  class Azteca extends Warrior {
    constructor(life, power) {
      super(life, power);
    }
    drinkNesquik() {
      this.life += 10;
      console.log(`Azteca tiene ${this.life} de vida`);
    }
  }
  
  let mayaWarrior = new Maya(50, 40);
  let aztecaWarrior = new Azteca(40, 30);
  console.log("Los guerreros se preparan:");
  aztecaWarrior.drinkNesquik();
  mayaWarrior.drinkColaCao();
  console.log("Guerrero Maya ataca a Maya:");
  mayaWarrior.attack(aztecaWarrior.defend(20)); // se pasa valor por parámetro en defend()
  console.log("Guerrero Azteca ataca a Maya:");
  aztecaWarrior.attack(mayaWarrior.defend(10));















