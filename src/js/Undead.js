import Character from "./Character.js"

export default class Undead extends Character {
    constructor(name, type = 'Undead') {
        super(name, type)

        this.attack = 25;
        this.defense = 25;
    }
}