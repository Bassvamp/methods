import Character from "./Character.js";

export default class Zombie extends Character {
    constructor(name, type = 'Zombie', health, level, attack = 40, defense = 10) {
        super(name, type, health, level, attack, defense)
    }
}

