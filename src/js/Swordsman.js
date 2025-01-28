import Character from "./Character.js"

export default class Swordsman extends Character {
    constructor(name, type = 'Swordsman', health, level, attack = 40, defense = 10) {
        super(name, type, health, level, attack, defense)
    }
}