import Character from "./Character.js"

export default class Undead extends Character {
    constructor(name, type = 'Undead', health, level, attack = 25, defense = 25) {
        super(name, type, health, level, attack, defense)
    }
}