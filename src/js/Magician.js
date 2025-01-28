import Character from "./Character.js"

export default class Magician extends Character {
    constructor(name, type = 'Magician', health, level, attack = 10, defense = 40) {
        super(name, type, health, level, attack, defense)
    }
}