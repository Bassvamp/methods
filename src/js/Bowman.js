import Character from "./Character.js"

export default class Bowman extends Character {
    constructor(name, type = 'Bowman', health, level, attack = 25, defense = 25) {
        super(name, type, health, level, attack, defense)
    }

    levelUp() {
        super.levelUp()
    }
}