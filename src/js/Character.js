export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Введите имя не менее двух и не больее десяти символов");
    } else {
      this.name = name;
    }

    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defense = undefined;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level++;
      this.attack *= 1.2;
      this.defense *= 1.2;
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить левел умершего");
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defense / 100);
    } else {
      throw new Error("Нельзя дамажить умершего");
    }
  }
}
