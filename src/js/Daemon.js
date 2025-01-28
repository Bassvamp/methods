import Character from "./Character.js"

export default class Daemon extends Character {
    constructor(name, type = 'Daemon', health, level, attack = 10, defense = 40) {
        super(name, type, health, level, attack, defense)
    }
}